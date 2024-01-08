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
import useCourse from '@/hooks/useCourse';
import { CourseType } from '@/types/course.type';
import { convertToVietnameseDayAndTime } from '@/utils/date';
import { WalletCards } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Fee() {
  const { getAllCourses } = useCourse();
  const [filter, setFilter] = useState<string>('');

  const { data: coursesData, isLoading } = getAllCourses(filter !== '' ? filter : undefined);

  const courses: CourseType[] = coursesData?.data.data.doc || [];

  return (
    <div>
      <Header header='Học phí' />
      <Search onChange={setFilter} query={filter} />

      <div className='mt-4 max-h-[60vh] overflow-y-auto'>
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
              <TableHead className='text-center'>Thao tác</TableHead>
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

                  <TableCell className='text-center'>
                    <Button variant={'outline'} size='icon' asChild>
                      <Link to={`/fee/${course._id}`}>
                        <WalletCards className='h-4 w-4' />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </div>
  );
}
