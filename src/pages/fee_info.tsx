import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import Search from '../components/Search';
import { useEffect, useState } from 'react';

import Header from '@/components/ui/header';

import useCourse from '@/hooks/useCourse';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import tuitionFeeApi from '@/apis/tuition-fee.api';
import { TuitionFee } from '@/types/tuition-fee.type';

export default function CollectFee() {
  const { id } = useParams();
  const [tuitionFees, setTuitionFees] = useState<TuitionFee[]>([]);
  // get course data
  const { getCourseById } = useCourse();
  const { data: courseData, isLoading } = getCourseById(id || '');
  const course = courseData?.data.data.doc;
  // get tuition fees
  const { data: tuitionFeesData, isLoading: isLoadingTuitionFees } = useQuery({
    queryKey: ['tuitionFees', id],
    queryFn: () => tuitionFeeApi.getTuitionFeesByCourseId(id || '')
  });
  useEffect(() => {
    setTuitionFees(tuitionFeesData?.data.data.doc || []);
  }, [tuitionFeesData]);

  // Update tuition fee
  const updateTuitionFeeMutation = useMutation({
    mutationFn: ({ id, hasTuitionFee }: { id: string; hasTuitionFee: boolean }) => {
      return tuitionFeeApi.updateTuitionFee({ id, hasTuitionFee });
    }
  });

  return (
    <>
      <Header header='THU HỌC PHÍ' />
      {/* Class Info */}
      <>
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
              <p>
                Học phí:{' '}
                <span className='font-bold'>
                  {course?.tuitionFee.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  })}
                </span>
              </p>
            </div>
          </div>
        )}

        {!isLoadingTuitionFees && (
          <div className='mt-4 max-h-[calc(100%-10rem)] overflow-y-auto'>
            <Table>
              <TableCaption>Danh sách lớp học</TableCaption>

              <TableHeader className='border-b-none'>
                <TableRow>
                  <TableHead className='text-center'>STT</TableHead>
                  <TableHead>Mã học viên</TableHead>
                  <TableHead>Họ và tên</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className='text-center'>Đã thu phí</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {tuitionFees.map((tuitionFee, index) => (
                  <TableRow key={tuitionFee._id}>
                    <TableCell className='text-center'>{index + 1}</TableCell>
                    <TableCell>{tuitionFee.studentId.studentId}</TableCell>
                    <TableCell>{tuitionFee.studentId.fullName}</TableCell>
                    <TableCell>{tuitionFee.studentId.phoneNumber}</TableCell>
                    <TableCell>{tuitionFee.studentId.email}</TableCell>
                    <TableCell>{tuitionFee.studentId.status}</TableCell>
                    <TableCell className='text-center'>
                      <Checkbox
                        checked={tuitionFee.hasTuitionFee}
                        onClick={() => {
                          const newTuitionFees = [...tuitionFees];
                          newTuitionFees[index].hasTuitionFee =
                            !newTuitionFees[index].hasTuitionFee;
                          setTuitionFees(newTuitionFees);

                          updateTuitionFeeMutation.mutate({
                            id: tuitionFee._id,
                            hasTuitionFee: newTuitionFees[index].hasTuitionFee
                          });
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </>
    </>
  );
}
