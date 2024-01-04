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
  who_can_see_your_content: 'who_can_see_your_content',
  forgot_password: 'forgot-password',
  reset_password: 'reset-password',
  notifications: 'notifications',
  search: 'search',
  accounts: 'accounts',
  all: '*',
  id: ':id',
  course: 'courses',
  add_course: 'course/add-course',
  student: 'students'
} as const;

export default path;
