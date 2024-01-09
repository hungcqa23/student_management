export interface GradeType {
  _id: string;
  student: {
    _id: string;
    studentId: string;
    fullName: string;
  };
  course: string;
  grades: Record<number, number>;
}
