import http from '@/utils/http';
import { SuccessResponse } from './utils.type';
import { StudentType } from '@/types/student.type';

export const studentApi = {
  addStudent(body: {
    courseId: string;
    phoneNumber: string;
    studentId: string;
    fullName: string;
    email: string;
    dateOfBirth: string;
    address: string;
  }) {
    return http.post('/students', body);
  },
  getStudentsByCourseId(id: string, q?: string, signal?: AbortSignal) {
    return http.get<
      SuccessResponse<{
        doc: StudentType[];
      }>
    >(`/students`, {
      params: {
        courseId: id,
        q,
        active: true
      },
      signal
    });
  },
  deleteStudent(id: string) {
    return http.delete(`/students/${id}`);
  },
  getStudent(id: string) {
    return http.get<
      SuccessResponse<{
        doc: StudentType & {
          courseId: {
            courseName: string;
          };
        };
      }>
    >(`/students/${id}`);
  }
};
