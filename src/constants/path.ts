const path = {
  home: '',
  user: 'user',
  profile: 'profile',
  changePassword: 'user/password',
  historyPurchase: 'user/purchase',
  login: '/login',
  register: '/sign-up',
  logout: '/logout',
  forgot_password: 'forgot-password',
  reset_password: 'reset-password',
  notifications: 'notifications',
  add_student: 'students/add-student',
  accounts: 'accounts',
  all: '*',
  id: ':id',
  course: 'courses',
  add_course: 'courses/add-course',
  student: 'students',
  grades: 'grades',
  recovery: 'recovery',
  attendance: 'attendances',
  fee: 'fee'
} as const;

export default path;
