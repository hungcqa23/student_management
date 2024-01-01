import { useState } from 'react';
import Search from '../../components/Search';
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
import { Pencil, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import path from '@/constants/path';

export default function Home() {
  const [filter, setFilter] = useState<string>('');
  return (
    <>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold uppercase text-black'>Lớp học</h1>
        <Button variant={'outline'} className='border-2' asChild>
          <Link to={path.add_course}>Tạo lớp mới</Link>
        </Button>
      </div>
      <Search onChange={setFilter} query={filter} />

      <div className='mt-4 max-h-[calc(100%-6rem)] overflow-y-auto'>
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
                  <MagnifyingGlassIcon className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon' className='mx-2'>
                  <Pencil className='h-4 w-4' />
                </Button>
                <Button variant={'outline'} size='icon'>
                  <Trash2 className='h-4 w-4' />
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
