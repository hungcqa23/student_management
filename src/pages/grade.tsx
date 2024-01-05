import Dialog from '@/components/Dialog';
import Modal from '@/components/Modal';
import Search from '@/components/Search';
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
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Grade() {
  const [filter, setFilter] = useState<string>('');
  return (
    <div>
      <h1 className='mb-4 text-2xl font-semibold uppercase text-black'>Nhập điểm</h1>
      <Search onChange={setFilter} query={filter} />

      <div className='mt-4 max-h-[60vh] overflow-y-auto'>
        <Table>
          <TableCaption>Danh sách lớp học</TableCaption>
          <TableHeader className='border-b-none'>
            <TableRow>
              <TableHead>STT</TableHead>
              <TableHead>Mã lớp</TableHead>
              <TableHead>Tên lớp</TableHead>
              <TableHead>Sĩ số</TableHead>
              <TableHead>Thời gian</TableHead>
              <TableHead>Ngày kết thúc</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className='text-right'>Thao tác</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
                <br />
                Thứ năm (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='text-right'>
                <Button variant={'outline'} size='icon'>
                  <Link to={'/grades/1'}>
                    <Pencil className='h-4 w-4' />
                  </Link>
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Kết thúc</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='font-medium'>1</TableCell>
              <TableCell>GT16</TableCell>
              <TableCell>Giải tích 1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>
                Thứ hai (15:30 - 17:30)
                <br />
                Thứ ba (15:30 - 17:30)
              </TableCell>
              <TableCell>30/12/2023</TableCell>
              <TableCell>Đang học</TableCell>
              <TableCell className='flex justify-end gap-2'>
                <Button variant={'outline'} size='icon'>
                  <Pencil className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
