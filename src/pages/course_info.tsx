import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import Search from '../components/Search';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Pencil, Trash2 } from 'lucide-react';
import Dialog from '@/components/Dialog';
import Modal from '@/components/Modal';
import { Link, useParams } from 'react-router-dom';
import Header from '@/components/ui/header';
import path from '@/constants/path';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import courseApi from '@/apis/course.api';
import Spinner from '@/components/Spinner';
import { convertToVietnameseDayAndTime } from '@/utils/date';
import { studentApi } from '@/apis/student.api';
import { toast } from 'react-toastify';

export default function CourseInfo() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<string>('');
  const [openDelete, setOpenDelete] = useState<{
    id: string;
    open: boolean;
  }>({ id: '', open: false });

  const { id } = useParams();
  const { data: courseData, isLoading } = useQuery({
    queryKey: ['courses', id],
    queryFn: () => courseApi.getCourse(id || '')
  });
  const course = courseData?.data.data.doc;
  const { data: studentsData } = useQuery({
    queryKey: [
      'students',
      {
        courseId: id || '',
        filter: filter || ''
      }
    ],
    queryFn: ({ signal }) =>
      studentApi.getStudentsByCourseId(id || '', filter === '' ? undefined : filter, signal)
  });
  const students = studentsData?.data.data.doc || [];

  const deleteStudentMutation = useMutation({
    mutationFn: (id: string) => studentApi.deleteStudent(id),
    onSuccess: () => {
      setOpenDelete({ id: '', open: false });
      queryClient.invalidateQueries({
        queryKey: [
          'students',
          {
            courseId: id || '',
            filter: filter || ''
          }
        ]
      });
      queryClient.invalidateQueries({ queryKey: ['courses', id] });
      toast.success('Xoá sinh viên thành cảng');
    },
    onError: () => toast.error('Xoá sinh viên thất bại')
  });

  return (
    <>
      <Header header='THÔNG TIN LỚP HỌC' />
      <>
        <Dialog
          isOpen={openDelete.open}
          setIsOpen={() => setOpenDelete({ id: '', open: false })}
          renderDialog={
            <Modal header='Xác nhận'>
              <>
                <div className='text-center'>Bạn có thực sự muốn xóa sinh viên này không?</div>
                <div className='mt-4 flex justify-center gap-2'>
                  <Button
                    variant={'destructive'}
                    onClick={() => {
                      deleteStudentMutation.mutate(openDelete.id);
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

      {isLoading && <Spinner />}

      {!isLoading && (
        <>
          <div className='mb-2 flex justify-between'>
            <div className='flex flex-col gap-2'>
              <p>
                Tên lớp: <span className='font-bold'>{course?.courseName}</span>
              </p>
              <p>
                Mã lớp: <span className='font-bold'>{course?.courseId}</span>
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <p>
                Sĩ số: <span className='font-bold'>{course?.numberOfStudents}</span>
              </p>
              <p>
                Số buổi học: <span className='font-bold'>{course?.sessions}</span>
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <p>
                Ngày bắt đầu: <span className='font-bold'>{course?.dateOfStart}</span>
              </p>
              <p>
                Ngày kết thúc: <span className='font-bold'>{course?.dateOfEnd}</span>
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <p>
                Trạng thái: <span className='font-bold'>{course?.status}</span>
              </p>
              <p className='flex'>
                Thời gian học:{' '}
                <span className='ml-1 inline-block font-bold'>
                  {course?.dateOfWeeks.map((item, index) => (
                    <>
                      <span className='mx-1' key={index}>
                        {convertToVietnameseDayAndTime(item)}
                      </span>
                      {index < course.dateOfWeeks.length - 1 && <br />}{' '}
                      {/* Chèn <br/> giữa các thẻ, trừ thẻ cuối cùng */}
                    </>
                  ))}
                </span>
              </p>
            </div>
          </div>

          <div className='my-6 flex justify-between'>
            <Search onChange={setFilter} query={filter} placeholder='Tìm kiếm tên học sinh...' />
            <Button variant={'outline'} asChild>
              <Link to={`/${path.add_student}?courseId=${course?._id}`}>
                <span className='text-slate-900'>Thêm học sinh</span>
              </Link>
            </Button>
          </div>

          <div className='mt-4 max-h-[calc(100%-10rem)] overflow-y-auto'>
            <Table>
              <TableCaption>Danh sách học viên</TableCaption>
              <TableHeader className='border-b-none'>
                <TableRow>
                  <TableHead className='text-center'>STT</TableHead>
                  <TableHead>Mã học viên</TableHead>
                  <TableHead>Họ và tên</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className='text-right'>Thao tác</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {students.map((student, index) => (
                  <TableRow>
                    <TableCell className='text-center font-medium'>{index + 1}</TableCell>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell>{student.fullName}</TableCell>
                    <TableCell>{student.phoneNumber}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.status}</TableCell>
                    <TableCell className='flex justify-end gap-2'>
                      <Button variant={'outline'} size='icon' asChild>
                        <Link to={`/students/${student._id}`}>
                          <MagnifyingGlassIcon className='h-4 w-4' />
                        </Link>
                      </Button>
                      <Button variant={'outline'} size='icon'>
                        <Pencil className='h-4 w-4' />
                      </Button>
                      <Button
                        variant={'outline'}
                        size='icon'
                        onClick={() => {
                          setOpenDelete({ id: student._id, open: true });
                        }}
                      >
                        <Trash2 className='h-4 w-4' />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </>
  );
}
