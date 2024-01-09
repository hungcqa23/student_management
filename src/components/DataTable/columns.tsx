import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../ui/checkbox';
import { StudentType } from '@/types/student.type';

// {
//   accessorKey: 'amount',
//   header: () => <div className='text-center'>Amount</div>,
//   cell: ({ row }) => {
//     const amount = parseFloat(row.getValue('amount'));
//     const formatted = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(amount);

//     return <div className='text-center font-medium'>{formatted}</div>;
//   }
// },
export const columns: ColumnDef<StudentType>[] = [
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
