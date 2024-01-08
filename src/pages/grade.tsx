import courseApi from '@/apis/course.api';
import Search from '@/components/Search';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { CourseType } from '@/types/course.type';
import { convertToVietnameseDayAndTime } from '@/utils/date';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useQuery } from '@tanstack/react-query';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Grades() {
  const [filter, setFilter] = useState<string>('');
  const navigate = useNavigate();
  const { data: coursesData, isLoading } = useQuery({
    queryKey: [
      'courses',
      {
        filter
      }
    ],
    queryFn: ({ signal }) => courseApi.getCourses(filter || undefined, signal)
  });
  const courses: CourseType[] = coursesData?.data.data.doc || [];
  const location = useLocation().pathname;
  let header = '';
  if (location === '/grades') {
    header = 'Nhập điểm';
  } else if (location === '/attendances') {
    header = 'Điểm danh';
  }

  return (
    <>
      <div className='mb-4 flex items-center justify-between'>
        <Header header={header} />
      </div>

      <Search onChange={setFilter} query={filter} placeholder='Tìm kiếm theo tên lớp...' />

      <div className='mt-4 max-h-[calc(100%-6rem)] overflow-y-auto'>
        <Table>
          <TableCaption>Danh sách lớp học</TableCaption>
          <TableHeader className='border-b-none'>
            <TableRow>
              <TableHead className='text-center'>STT</TableHead>
              <TableHead>Mã lớp</TableHead>
              <TableHead>Tên lớp</TableHead>
              <TableHead className='text-center'>Sĩ số</TableHead>
              <TableHead>Thời gian</TableHead>
              <TableHead>Ngày kết thúc</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead className='text-right'>Thao tác</TableHead>
            </TableRow>
          </TableHeader>

          {isLoading && <Spinner />}
          {!isLoading && (
            <TableBody>
              {courses.map((course, index) => (
                <TableRow key={course._id}>
                  <TableCell className='text-center font-medium'>{index + 1}</TableCell>
                  <TableCell>{course.courseId}</TableCell>
                  <TableCell>{course.courseName}</TableCell>
                  <TableCell className='text-center'>{course.numberOfStudents}</TableCell>
                  <TableCell>
                    {course.dateOfWeeks.map((dateOfWeek, index) => {
                      return <p key={index}>{convertToVietnameseDayAndTime(dateOfWeek)}</p>;
                    })}
                  </TableCell>
                  <TableCell>{course.dateOfEnd}</TableCell>
                  <TableCell>{course.status}</TableCell>
                  <TableCell className='text-right'>
                    <Button variant={'outline'} size='icon' asChild>
                      <Link
                        to={`${
                          location === '/grades'
                            ? `/grades/${course._id}`
                            : `/attendances/${course._id}`
                        }`}
                      >
                        <Pencil className='h-4 w-4' />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </>
  );
}
