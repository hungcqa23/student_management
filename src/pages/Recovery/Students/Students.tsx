import { studentApi } from '@/apis/student.api';
import { columnStudents } from '@/components/DataTable/columns';
import { DataTable } from '@/components/DataTable/data-table';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Students() {
  const queryClient = useQueryClient();
  const { data: studentsData, isLoading } = useQuery({
    queryKey: [
      'students',
      {
        active: false
      }
    ],
    queryFn: () => studentApi.getStudentRecovery()
  });
  const students = studentsData?.data.data.doc || [];
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data: students,
    columns: columnStudents,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection
    }
  });

  const recoverStudentMutation = useMutation({
    mutationFn: (id: string) => studentApi.recoverStudent(id),
    onSuccess: () => {
      toast.success('Khôi phục thành công');
      queryClient.invalidateQueries({
        queryKey: ['students']
      });
    }
  });

  return (
    <>
      <div className='mb-4 mt-2 flex justify-end'>
        <Button
          variant={'outline'}
          onClick={() => {
            console.log(table.getSelectedRowModel().rows);
            table.getSelectedRowModel().rows.forEach(row => {
              recoverStudentMutation.mutate(row.original._id);
            });
          }}
        >
          <ReloadIcon className='mr-2' />
          Khôi phục
        </Button>
      </div>
      {!isLoading && <DataTable columns={columnStudents} data={students} table={table} />}
    </>
  );
}
