import http from '@/utils/http';
import { SuccessResponse } from './utils.type';
import { CourseType } from '@/types/course.type';

const courseApi = {
  addCourse(body: {
    courseId: string;
    courseName: string;
    dateOfWeeks: string[];
    dateOfStart: string;
    status: string;
    sessions: number;
    tuitionFee: number;
  }) {
    return http.post('/courses', body);
  },
  getCourses(q?: string, signal?: AbortSignal) {
    return http.get<
      SuccessResponse<{
        doc: CourseType[];
      }>
    >('/courses', {
      params: {
        active: true,
        q: q
      },
      signal
    });
  },
  deleteCourse(id: string) {
    return http.patch(`/courses/${id}`, {
      active: false
    });
  },
  getCourse(id: string) {
    return http.get<
      SuccessResponse<{
        doc: CourseType;
      }>
    >(`/courses/${id}`);
  },
  getStatistics() {
    return http.get<
      SuccessResponse<{
        numberCourses: number;
        numberStudents: number;
      }>
    >(`/courses/statistics`);
  }
};

export default courseApi;
