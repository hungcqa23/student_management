export interface AttendanceType {
  _id: string;
  studentId: {
    _id: string;
    studentId: string;
    fullName: string;
  };
  courseId: string;
  attendanceDates: boolean[];
  __v: number;
}
