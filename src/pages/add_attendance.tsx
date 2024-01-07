import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/ui/header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export default function AddAttendance() {
  return (
    <>
      <Header header='Điểm danh' />
      {/* Class Info */}
      <div className='mb-2 flex justify-between'>
        <div className='flex flex-col gap-2'>
          <p>
            Tên lớp: <span className='font-bold'>GT16</span>
          </p>
          <p>
            Mã lớp: <span className='font-bold'>GK001</span>
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
      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>STT</TableHead>
            <TableHead className='w-52'>Họ và tên</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
            <TableHead>17/9/2023</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className='text-center'>1</TableCell>
            <TableCell>Nguyễn Thanh Huy</TableCell>

            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
            <TableCell className='text-center'>
              <Checkbox />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
