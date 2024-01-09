import { useState } from 'react';
import Search from '../components/Search';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import courseApi from '@/apis/course.api';
import { CourseType } from '@/types/course.type';
import { Pencil, Trash2 } from 'lucide-react';
import { convertToVietnameseDayAndTime } from '@/utils/date';
import Dialog from '@/components/Dialog';
import Modal from '@/components/Modal';
import { toast } from 'react-toastify';
import Spinner from '@/components/Spinner';
import Header from '@/components/ui/header';
import useCourse from '@/hooks/useCourse';

export default function Course() {
  const { getAllCourses } = useCourse();
  const [filter, setFilter] = useState<string>('');
  const [openDelete, setOpenDelete] = useState<{
    id: string;
    open: boolean;
  }>({ id: '', open: false });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: coursesData, isLoading } = getAllCourses(filter !== '' ? filter : undefined);

  const courses: CourseType[] = coursesData?.data.data.doc || [];
  const deleteCourseMutation = useMutation({
    mutationFn: (id: string) => courseApi.deleteCourse(id),
    onSuccess: () => {
      setOpenDelete({ id: '', open: false });
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      toast.success('Xoá lớp học thành cảng');
    },
    onError: () => toast.error('Xoá lơp học thất bại')
  });

  return (
    <>
      <div className='mb-4 flex items-center justify-between'>
        <Header header={'Danh sách lớp học'} />
        <Button variant={'outline'} onClick={() => navigate('add-course')}>
          <span className='text-slate-900'>Tạo lớp mới</span>
        </Button>
      </div>

      <Search onChange={setFilter} query={filter} placeholder='Tìm kiếm theo tên lớp...' />

      <div className='mt-4 max-h-[calc(100%-6rem)] overflow-y-auto'>
        <Table>
          <TableCaption>Danh sách lớp học</TableCaption>
          <TableHeader className='border-b-none'>
            <TableRow>
              <TableHead className='text-center'>STT</TableHead>
              <TableHead>Mã lớp</TableHead>
              <TableHead>Tên lớp</TableHead>
              <TableHead className='text-center'>Sĩ số</TableHead>
              <TableHead>Thời gian</TableHead>
              <TableHead>Ngày kết thúc</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className='text-center'>Thao tác</TableHead>
            </TableRow>
          </TableHeader>

          {isLoading && <Spinner />}
          {!isLoading && (
            <TableBody>
              {courses.map((course, index) => (
                <TableRow key={course._id}>
                  <TableCell className='text-center font-medium'>{index + 1}</TableCell>
                  <TableCell>{course.courseId}</TableCell>
                  <TableCell>{course.courseName}</TableCell>
                  <TableCell className='text-center'>{course.numberOfStudents}</TableCell>
                  <TableCell>
                    {course.dateOfWeeks.map((dateOfWeek, index) => {
                      return <p key={index}>{convertToVietnameseDayAndTime(dateOfWeek)}</p>;
                    })}
                  </TableCell>
                  <TableCell>{course.dateOfEnd}</TableCell>
                  <TableCell>{course.status}</TableCell>
                  <TableCell className='flex justify-center gap-2 text-center'>
                    <Button variant={'outline'} size='icon' asChild>
                      <Link to={`/courses/${course._id}`}>
                        <MagnifyingGlassIcon className='h-4 w-4' />
                      </Link>
                    </Button>
                    <Button
                      variant={'outline'}
                      size='icon'
                      onClick={() => {
                        setOpenDelete({ id: course._id, open: true });
                      }}
                    >
                      <Trash2 className='h-4 w-4' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>

      <>
        <Dialog
          isOpen={openDelete.open}
          setIsOpen={() => setOpenDelete({ id: '', open: false })}
          renderDialog={
            <Modal header='Xác nhận'>
              <>
                <div className='text-center'>Bạn có thực sự muốn xóa lớp này không?</div>
                <div className='mt-4 flex justify-center gap-2'>
                  <Button
                    variant={'destructive'}
                    onClick={() => {
                      deleteCourseMutation.mutate(openDelete.id);
                    }}
                  >
                    Đồng y
                  </Button>
                  <Button
                    variant={'outline'}
                    onClick={() => setOpenDelete({ id: '', open: false })}
                  >
                    Hủy bỏ
                  </Button>
                </div>
              </>
            </Modal>
          }
          classNameOverlay='flex items-center justify-center bg-black/70'
        >
          <></>
        </Dialog>
      </>
    </>
  );
}
