import attendanceApi from '@/apis/attendance.api';

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
import useCourse from '@/hooks/useCourse';
import { AttendanceType } from '@/types/attendance.type';
import { convertToVietnameseDayAndTime } from '@/utils/date';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AddAttendance() {
  const { id } = useParams();
  const [attendances, setAttendances] = useState<AttendanceType[]>([]);

  const { getCourseById } = useCourse();
  const { data: courseData, isLoading } = getCourseById(id || '');
  const course = courseData?.data.data.doc;

  const { data: attendancesData, isLoading: isLoadingAttendances } = useQuery({
    queryKey: ['attendances', id || ''],
    queryFn: () => attendanceApi.getAttendanceByCourseId(id || '')
  });

  const updateAttendanceMutation = useMutation({
    mutationFn: (body: { attendanceDates: boolean[]; attendanceId: string }) =>
      attendanceApi.updateAttendance(body)
  });

  useEffect(() => {
    setAttendances(attendancesData?.data.data.doc || []);
  }, [attendancesData]);

  return (
    <>
      <Header header='Điểm danh' />
      {/* Class Info */}
      {!isLoading && (
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
                  <span key={index}>
                    <span className='mx-1'>{convertToVietnameseDayAndTime(item)}</span>
                    {index < course.dateOfWeeks.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Table */}
      {!isLoadingAttendances && attendances.length > 0 && (
        <Table className='mt-5'>
          <TableHeader>
            <TableRow className='text-xs'>
              <TableHead className='text-center'>STT</TableHead>
              <TableHead>Họ và tên</TableHead>
              <TableHead>Mã học viên</TableHead>
              {course?.dates.map(date => (
                <TableHead className='text-center' key={date}>
                  {date}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {attendances.map((attendance, index) => (
              <TableRow key={attendance._id}>
                <TableCell className='text-center'>{index + 1}</TableCell>
                <TableCell>{attendance.studentId?.fullName}</TableCell>
                <TableCell>{attendance.studentId?.studentId}</TableCell>
                {attendance.attendanceDates.map((attendanceDate, index1) => (
                  <TableCell className='text-center' key={`${attendance._id}_${index1}`}>
                    <Checkbox
                      checked={attendanceDate}
                      onClick={() => {
                        const updatedAttendances = [...attendances];
                        updatedAttendances[index].attendanceDates[index1] = !attendanceDate;
                        setAttendances(updatedAttendances);

                        updateAttendanceMutation.mutate({
                          attendanceId: attendance._id,
                          attendanceDates: updatedAttendances[index].attendanceDates
                        });
                      }}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
