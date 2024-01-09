export interface StudentType {
  _id: string;
  studentId: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  address: string;
  status: string;
  courseId: {
    _id: string;
    courseName: string;
    courseId: string;
  };
  active: boolean;
  updatedAt: string;
  createdAt: string;
}
