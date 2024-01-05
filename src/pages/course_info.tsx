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
import { Link } from 'react-router-dom';
import Header from '@/components/ui/header';

export default function CourseInfo() {
  const [filter, setFilter] = useState<string>('');
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  return (
    <>
      <Header header='THÔNG TIN LỚP' />

      <div className='mb-2 flex justify-between'>
        <div className='flex flex-col gap-2'>
          <p>
            Tên lớp: <span className='font-bold'>Cao Quảng An Hưng khóa 16</span>
          </p>
          <p>
            Mã lớp: <span className='font-bold'>HV001</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Sĩ số: <span className='font-bold'>16</span>
          </p>
          <p>
            Số buổi học: <span className='font-bold'>2</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Ngày bắt đầu: <span className='font-bold'>17/9/2023</span>
          </p>
          <p>
            Ngày kết thúc: <span className='font-bold'>17/9/2023</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Trạng thái: <span className='font-bold'>Đang học</span>
          </p>
          <p className='flex'>
            Thời gian học:{' '}
            <span className='ml-1 inline-block font-bold'>
              Chủ nhật(14:30 - 17:30)
              <br /> Thứ Ba (8:30 - 13:30)
            </span>
          </p>
        </div>
      </div>

      <Search onChange={setFilter} query={filter} />

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
                        <div className='text-center'>Bạn có thực sự muốn xóa lớp này không?</div>
                        <div className='mt-4 flex justify-center gap-2'>
                          <Button variant={'destructive'} onClick={() => setOpenDelete(false)}>
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

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>HV001</TableCell>
              <TableCell>Cao Quảng An Hưng</TableCell>
              <TableCell>0358334135</TableCell>
              <TableCell>anbeel191@gmail.com</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <MagnifyingGlassIcon className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>HV001</TableCell>
              <TableCell>Cao Quảng An Hưng</TableCell>
              <TableCell>0358334135</TableCell>
              <TableCell>anbeel191@gmail.com</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <MagnifyingGlassIcon className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>HV001</TableCell>
              <TableCell>Cao Quảng An Hưng</TableCell>
              <TableCell>0358334135</TableCell>
              <TableCell>anbeel191@gmail.com</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <MagnifyingGlassIcon className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>HV001</TableCell>
              <TableCell>Cao Quảng An Hưng</TableCell>
              <TableCell>0358334135</TableCell>
              <TableCell>anbeel191@gmail.com</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <MagnifyingGlassIcon className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>HV0010</TableCell>
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
                <Button variant={'outline'} size='icon'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>HV001</TableCell>
              <TableCell>Cao Quảng An Hưng</TableCell>
              <TableCell>0358334135</TableCell>
              <TableCell>anbeel191@gmail.com</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <MagnifyingGlassIcon className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
