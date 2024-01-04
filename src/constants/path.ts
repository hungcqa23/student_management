const path = {
  home: '',
  user: 'user',
  profile: 'profile',
  changePassword: 'user/password',
  historyPurchase: 'user/purchase',
  login: '/login',
  register: '/sign-up',
  logout: '/logout',
  messages: 'messages',
  forgot_password: 'forgot-password',
  reset_password: 'reset-password',
  notifications: 'notifications',
  search: 'search',
  accounts: 'accounts',
  all: '*',
  id: ':id',
  course: 'courses',
  add_course: 'courses/add-course',
  student: 'students',
  grades: 'grades'
} as const;

export default path;
