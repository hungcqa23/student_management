export interface CourseType {
  _id: string;
  courseId: string;
  courseName: string;
  numberOfStudents: number;
  dateOfWeeks: string[];
  dateOfEnd: string;
  dateOfStart: string;
  dates: string[];
  sessions: number;
  status: string;
  tuitionFee: number;
  active: boolean;
  createdAt: string;
}
