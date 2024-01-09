import courseApi from '@/apis/course.api';
import { columnCourses } from '@/components/DataTable/columns';
import { DataTable } from '@/components/DataTable/data-table';
import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Courses() {
  const queryClient = useQueryClient();
  const { data: coursesData, isLoading } = useQuery({
    queryKey: [
      'courses',
      {
        active: false
      }
    ],
    queryFn: courseApi.getCoursesRecovery
  });

  const courses = coursesData?.data.data.doc || [];
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: courses,
    columns: columnCourses,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      sorting,
      rowSelection
    }
  });

  const recoverStudentMutation = useMutation({
    mutationFn: (id: string) => courseApi.recoverCourse(id),
    onSuccess: () => {
      toast.success('Khôi phục thành công');
      queryClient.invalidateQueries({
        queryKey: ['courses']
      });
    }
  });

  return (
    <>
      <div className='mb-4 mt-2 flex justify-end'>
        <Button
          variant={'outline'}
          onClick={() => {
            table.getSelectedRowModel().rows.forEach(row => {
              recoverStudentMutation.mutate(row.original._id);
            });
          }}
        >
          <ReloadIcon className='mr-2' />
          Khôi phục
        </Button>
      </div>
      {!isLoading && <DataTable columns={columnCourses} data={courses} table={table} />}
    </>
  );
}
