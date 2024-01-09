import { gradeApi } from '@/apis/grade.api';
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
import { GradeType } from '@/types/grade.type';
import { convertToVietnameseDayAndTime } from '@/utils/date';
import { calculateAverageGrade } from '@/utils/helper';
import { CheckCircledIcon, CheckIcon } from '@radix-ui/react-icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddGrade() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { getCourseById } = useCourse();
  const [isSetting, setIsSetting] = useState(false);
  const [grades, setGrades] = useState<GradeType[]>([]);
  const { data: courseData, isLoading } = getCourseById(id || '');
  const course = courseData?.data.data.doc;

  const { data: gradesData, isLoading: isLoadingGrades } = useQuery({
    queryKey: [
      'grades',
      {
        id
      }
    ],
    queryFn: () => gradeApi.getGradesByCourseId(id || '')
  });

  const updateGradeMutation = useMutation({
    mutationFn: (body: { id: string; grades: Record<number, number> }) =>
      gradeApi.updateGrade(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['grades', { id }]
      });
    }
  });

  useEffect(() => {
    if (gradesData?.data.data.doc) setGrades(gradesData?.data.data.doc);
  }, [gradesData]);

  return (
    <>
      <Header header='Nhập điểm' />
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
      {/* Add Grade */}
      <div className='my-2 flex'>
        <Button
          className='ml-auto'
          variant={'outline'}
          onClick={() => {
            setIsSetting(prev => !prev);
            grades.forEach(grade => {
              updateGradeMutation.mutate({ id: grade._id, grades: grade.grades });
            });
          }}
        >
          {isSetting && (
            <>
              Lưu điểm <CheckCircledIcon className='ml-2' />
            </>
          )}
          {!isSetting && 'Sửa cột điểm'}
        </Button>
      </div>

      {/* Table */}
      {!isLoadingGrades && (
        <div className='mt-4 max-h-[calc(100%-10rem)] overflow-y-auto'>
          <Table>
            <TableHeader className='border-b-none'>
              <TableRow>
                <TableHead className='text-center'>STT</TableHead>
                <TableHead>Mã học viên</TableHead>
                <TableHead>Họ và tên</TableHead>
                <TableHead className='text-center'>Tổng kết</TableHead>
                {Array.from({ length: course?.numberOfGrades || 0 }).map((_, index) => (
                  <TableHead key={index} className='text-center'>
                    Cột điểm {index + 1}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {grades.map((grade, index_row) => (
                <TableRow key={grade._id}>
                  <TableCell className='text-center'>{index_row + 1}</TableCell>
                  <TableCell>{grade.student.studentId}</TableCell>
                  <TableCell>{grade.student.fullName}</TableCell>
                  <TableCell className='text-center'>
                    {calculateAverageGrade(grade.grades)}
                  </TableCell>
                  {Array.from({ length: course?.numberOfGrades || 0 }).map((_, index_cell) => (
                    <TableCell key={index_cell} className='text-center'>
                      <div className='flex min-h-[2rem] items-center justify-center'>
                        {!isSetting && (grade?.grades?.[index_cell] || '')}
                        {isSetting && (
                          <input
                            className='inline h-8 w-7 rounded border border-gray-400 text-center text-sm font-medium focus:outline-none'
                            type='number'
                            value={grade?.grades[index_cell] || ''}
                            onChange={e => {
                              if (Number(e.target.value) > 10 || Number(e.target.value) < 0) {
                                return;
                              }
                              const newGrades = [...grades];
                              newGrades[index_row].grades = {
                                ...newGrades[index_row].grades,
                                [index_cell]: Number(e.target.value)
                              };
                              setGrades(newGrades);
                            }}
                          />
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
