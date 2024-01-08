import courseApi from '@/apis/course.api';
import { useQuery } from '@tanstack/react-query';

function useCourse() {
  const getAllCourses = (q?: string) =>
    useQuery({
      queryKey: ['courses', q],
      queryFn: ({ signal }) => courseApi.getCourses(q, signal)
    });

  const getCourseById = (id: string) =>
    useQuery({
      queryKey: ['course', id],
      queryFn: () => courseApi.getCourse(id)
    });

  return {
    getAllCourses,
    getCourseById
  };
}

export default useCourse;
