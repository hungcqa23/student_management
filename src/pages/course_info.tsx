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
import { useQuery } from '@tanstack/react-query';
import courseApi from '@/apis/course.api';
import Spinner from '@/components/Spinner';
import { convertToVietnameseDayAndTime } from '@/utils/date';

export default function CourseInfo() {
  const [filter, setFilter] = useState<string>('');
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { id } = useParams();
  const { data: courseData, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: () => courseApi.getCourse(id || '')
  });

  const course = courseData?.data.data.doc;

  return (
    <>
      <Header header='THÔNG TIN LỚP HỌC' />

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
                <div className='ml-1 inline-block font-bold'>
                  {course?.dateOfWeeks.map((item, index) => (
                    <>
                      <span className='mx-1' key={index}>
                        {convertToVietnameseDayAndTime(item)}
                      </span>
                      {index < course.dateOfWeeks.length - 1 && <br />}{' '}
                      {/* Chèn <br/> giữa các thẻ, trừ thẻ cuối cùng */}
                    </>
                  ))}
                </div>
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
              <TableCaption>Danh sách lớp học</TableCaption>
              <TableHeader className='border-b-none'>
                <TableRow>
                  <TableHead>STT</TableHead>
                  <TableHead>Mã học viên</TableHead>
                  <TableHead>Họ và tên</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className='text-right'>Thao tác</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>1</TableCell>
                  <TableCell>HV001</TableCell>
                  <TableCell>Cao Quảng An Hưng</TableCell>
                  <TableCell>0358334135</TableCell>
                  <TableCell>anbeel191@gmail.com</TableCell>
                  <TableCell>Đang học</TableCell>
                  <TableCell className='flex justify-end gap-2'>
                    <Button variant={'outline'} size='icon' asChild>
                      <Link to={'/students/student_info'}>
                        <MagnifyingGlassIcon className='h-4 w-4' />
                      </Link>
                    </Button>
                    <Button variant={'outline'} size='icon'>
                      <Pencil className='h-4 w-4' />
                    </Button>

                    <Dialog
                      isOpen={openDelete}
                      setIsOpen={setOpenDelete}
                      renderDialog={
                        <Modal header='Xác nhận'>
                          <>
                            <div className='text-center'>
                              Bạn có thực sự muốn xóa học viên này không?
                            </div>
                            <div className='mt-4 flex justify-center gap-2'>
                              <Button
                                variant={'destructive'}
                                onClick={() => {
                                  setOpenDelete(false);
                                }}
                              >
                                Đồng y
                              </Button>
                              <Button variant={'outline'} onClick={() => setOpenDelete(false)}>
                                Hủy bỏ
                              </Button>
                            </div>
                          </>
                        </Modal>
                      }
                    >
                      <Button variant={'outline'} size='icon'>
                        <Trash2 className='h-4 w-4' />
                      </Button>
                    </Dialog>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </>
      )}

      {isLoading && <Spinner />}
    </>
  );
}
