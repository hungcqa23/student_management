import http from '@/utils/http';

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
  }
};
