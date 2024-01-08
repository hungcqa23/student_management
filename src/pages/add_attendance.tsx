import attendanceApi from '@/apis/attendance.api';
import courseApi from '@/apis/course.api';
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
import { convertToVietnameseDayAndTime } from '@/utils/date';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function AddAttendance() {
  const { id } = useParams();
  const { data: courseData, isLoading } = useQuery({
    queryKey: ['courses', id],
    queryFn: () => courseApi.getCourse(id || '')
  });
  const course = courseData?.data.data.doc;
  const { data: attendancesData } = useQuery({
    queryKey: [
      'attendances',
      {
        courseId: id || ''
      }
    ],
    queryFn: () => attendanceApi.getAttendanceByCourseId(id || '')
  });
  const attendances = attendancesData?.data.data.doc || [];

  return (
    <>
      <Header header='Điểm danh' />
      {/* Class Info */}
      <div className='mb-2 flex justify-between'>
        <div className='flex flex-col gap-2'>
          <p>
            Tên lớp: <span className='font-bold'>{course?.courseName}</span>
          </p>
          <p>
            Mã lớp: <span className='font-bold'>{course?.courseId}</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Sĩ số: <span className='font-bold'>{course?.numberOfStudents}</span>
          </p>
          <p>
            Số buổi học: <span className='font-bold'>{course?.sessions}</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Ngày bắt đầu: <span className='font-bold'>{course?.dateOfStart}</span>
          </p>
          <p>
            Ngày kết thúc: <span className='font-bold'>{course?.dateOfEnd}</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Trạng thái: <span className='font-bold'>{course?.status}</span>
          </p>
          <p className='flex'>
            Thời gian học:{' '}
            <span className='ml-1 inline-block font-bold'>
              {course?.dateOfWeeks.map((item, index) => (
                <>
                  <span className='mx-1' key={index}>
                    {convertToVietnameseDayAndTime(item)}
                  </span>
                  {index < course.dateOfWeeks.length - 1 && <br />}{' '}
                  {/* Chèn <br/> giữa các thẻ, trừ thẻ cuối cùng */}
                </>
              ))}
            </span>
          </p>
        </div>
      </div>
      {/* Table */}
      <Table className='mt-10'>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>STT</TableHead>
            <TableHead>Họ và tên</TableHead>
            <TableHead>Mã học viên</TableHead>
            {course?.dates.map(date => (
              <>
                <TableHead className='text-center' key={date}>
                  {date}
                </TableHead>
              </>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {attendances.map((attendance, index) => (
            <TableRow key={attendance._id}>
              <TableCell className='text-center'>{index + 1}</TableCell>
              <TableCell>{attendance.studentId.fullName}</TableCell>
              <TableCell>{attendance.studentId.studentId}</TableCell>

              {attendance.attendanceDates.map((attendanceDate, index) => (
                <>
                  <TableCell className='text-center' key={index}>
                    <Checkbox checked={attendanceDate} />
                  </TableCell>
                </>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
