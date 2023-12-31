import http from '@/utils/http';
import { SuccessResponse } from './utils.type';
import { AttendanceType } from '@/types/attendance.type';

const attendanceApi = {
  getAttendanceByCourseId: (id: string) => {
    return http.get<
      SuccessResponse<{
        doc: AttendanceType[];
      }>
    >(`/attendances/${id}`);
  },
  updateAttendance: ({
    attendanceDates,
    attendanceId
  }: {
    attendanceId: string;
    attendanceDates: boolean[];
  }) => {
    return http.patch(`/attendances/${attendanceId}`, {
      attendanceDates
    });
  }
};

export default attendanceApi;
