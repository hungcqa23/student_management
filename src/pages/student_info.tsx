import { studentApi } from '@/apis/student.api';
import Spinner from '@/components/Spinner';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function StudentInfo() {
  const { id } = useParams<{ id: string }>();
  const { data: studentData, isLoading } = useQuery({
    queryKey: ['students', id],
    queryFn: () => studentApi.getStudent(id || '')
  });

  const student = studentData?.data.data.doc;

  return (
    <>
      {isLoading && <Spinner />}
      
      {!isLoading && (
        <div className='text-normal flex flex-col gap-2'>
          <h1 className='mb-4 text-2xl font-bold uppercase text-black'>Thông tin học viên</h1>
          <p>
            Họ và tên:{' '}
            <span className='text-base font-semibold text-black'>{student?.fullName}</span>
          </p>
          <p>
            Ngày sinh:{' '}
            <span className='text-base font-semibold text-black'>{student?.dateOfBirth}</span>
          </p>
          <p>
            Lớp:{' '}
            <span className='text-base font-semibold text-black'>
              {student?.courseId?.courseName}
            </span>
          </p>
          <p>
            Trạng thái:{' '}
            <span className='text-base font-semibold text-black'>{student?.status}</span>
          </p>
          <p>
            Số điện thoại:{' '}
            <span className='text-base font-semibold text-black'>{student?.phoneNumber}</span>{' '}
          </p>
          <p>
            Email cá nhân:{' '}
            <span className='text-base font-semibold text-black'>{student?.email}</span>
          </p>
          <p>
            Địa chỉ liên lạc:{' '}
            <span className='text-base font-semibold text-black'>{student?.address}</span>
          </p>
        </div>
      )}
    </>
  );
}
