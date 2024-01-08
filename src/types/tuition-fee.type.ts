export interface TuitionFee {
  _id: string;
  studentId: {
    _id: string;
    studentId: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    status: string;
  };
  courseId: string;
  hasTuitionFee: boolean;
}
