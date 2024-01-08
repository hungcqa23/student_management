import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
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

export default function CollectFee() {
  const [filter, setFilter] = useState<string>('');
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  return (
    <>
      <Header header='THU HỌC PHÍ' />
      <>
        <div className='mb-2 flex justify-between'>
          <div className='flex flex-col gap-2'>
            <p>
              Tên lớp: <span className='font-bold'>Giải tích</span>
            </p>
            <p>
              Mã lớp: <span className='font-bold'>GT002</span>
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <p>
              Sĩ số: <span className='font-bold'>2</span>
            </p>
            <p>
              Số buổi học: <span className='font-bold'>10</span>
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <p>
              Ngày bắt đầu: <span className='font-bold'>09/01/2024</span>
            </p>
            <p>
              Ngày kết thúc: <span className='font-bold'>12/02/2024</span>
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <p>
              Trạng thái: <span className='font-bold'>Đang học</span>
            </p>
            <p>
              Học phí: <span className='font-bold'>1,500,000 đ</span>
            </p>
          </div>
        </div>

        <div className='my-6'>
          <Search onChange={setFilter} query={filter} placeholder='Tìm kiếm tên học sinh...' />
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
                <TableHead className='text-right'>Đã thu phí</TableHead>
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
                <TableCell className='me-8 flex justify-end'>
                  <Checkbox />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </>
    </>
  );
}
