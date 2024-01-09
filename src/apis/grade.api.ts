import http from '@/utils/http';
import { SuccessResponse } from './utils.type';
import { GradeType } from '@/types/grade.type';

export const gradeApi = {
  getGradesByCourseId: (id: string) => {
    return http.get<SuccessResponse<{ doc: GradeType[] }>>(`/grades/${id}`);
  },
  updateGrade: ({ id, grades }: { id: string; grades: Record<number, number> }) => {
    return http.patch(`/grades/${id}`, {
      grades
    });
  }
};
