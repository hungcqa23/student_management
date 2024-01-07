// const course = {
//   _id: '659a446411c03acfa7f4abcb',
//   courseId: 'GT001',
//   courseName: 'Giải tích',
//   numberOfStudents: 0,
//   dateOfWeeks: ['Monday 8:30 - 7:00'],
//   dateOfEnd: '29/01/2024',
//   dateOfStart: '03/01/2024',
//   dates: ['08/01/2024', '15/01/2024', '22/01/2024', '29/01/2024'],
//   sessions: 4,
//   status: 'đang học',
//   active: true,
//   createdAt: '2024-01-07T06:27:48.789Z'
// };

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
  active: boolean;
  createdAt: string;
}
