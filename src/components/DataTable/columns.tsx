import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../ui/checkbox';
import { StudentType } from '@/types/student.type';
import { CourseType } from '@/types/course.type';
import { convertToVietnameseDayAndTime } from '@/utils/date';
import { Button } from '../ui/button';
import { ArrowUpDown } from 'lucide-react';

export const columnStudents: ColumnDef<StudentType>[] = [
  {
    accessorKey: 'studentId',
    header: 'Mã học viên'
  },
  {
    accessorKey: 'courseId.courseId',
    header: 'Mã lớp'
  },
  {
    accessorKey: 'fullName',
    header: 'Họ và tên'
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Số điện thoại'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  }
];

export const columnCourses: ColumnDef<CourseType>[] = [
  {
    accessorKey: 'courseId',
    header: 'Mã lớp'
  },
  {
    accessorKey: 'courseName',
    header: 'Tên lớp'
  },
  {
    accessorKey: 'numberOfStudents',
    header: 'Sĩ số'
  },
  {
    accessorKey: 'dateOfWeeks',
    header: 'Thời gian',
    cell: ({ row }) =>
      (row.getValue('dateOfWeeks') as string[]).map((dateOfWeek, index) => {
        return <p key={index}>{convertToVietnameseDayAndTime(dateOfWeek)}</p>;
      })
  },
  {
    accessorKey: 'dateOfEnd',
    enableSorting: true,
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => {
              console.log(column.getIsSorted());
              return column.toggleSorting(column.getIsSorted() === 'asc');
            }}
          >
            Ngày kết thúc
            <ArrowUpDown className='ml-2 h-4 w-4' />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => <div className='text-center'>{row.getValue('dateOfEnd')}</div>
  },
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: true,
    enableHiding: false
  }
];
