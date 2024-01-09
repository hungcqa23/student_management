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
  updateStudent(body: {
    id: string;
    phoneNumber: string;
    fullName: string;
    email: string;
    dateOfBirth: string;
    address: string;
    status: string;
  }) {
    return http.patch(`/students/${body.id}`, body);
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
  },
  getAllStudentsByCourseId(id: string) {
    return http.get<
      SuccessResponse<{
        doc: StudentType[];
      }>
    >(`/students`, {
      params: {
        courseId: id
      }
    });
  },
  getStudentRecovery() {
    return http.get('/students?active=false');
  },
  recoverStudent(id: string) {
    return http.post(`/students/recovery/${id}`, {
      active: true
    });
  }
};
