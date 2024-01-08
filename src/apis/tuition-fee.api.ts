import { TuitionFee } from '@/types/tuition-fee.type';
import { SuccessResponse } from '@/types/utils.type';
import http from '@/utils/http';

const tuitionFeeApi = {
  getTuitionFeesByCourseId: (id: string) => {
    return http.get<SuccessResponse<{ doc: TuitionFee[] }>>(`/tuition-fees/${id}`);
  },
  updateTuitionFee: ({ id, hasTuitionFee }: { id: string; hasTuitionFee: boolean }) => {
    return http.patch(`/tuition-fees/${id}`, {
      hasTuitionFee
    });
  }
};

export default tuitionFeeApi;
