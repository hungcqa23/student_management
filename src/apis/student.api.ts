import http from '@/utils/http';

export const studentApi = {
  addStudent() {
    return http.post('/students/add-student');
  }
};
