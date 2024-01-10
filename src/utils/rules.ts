import * as yup from 'yup';

export const schema = yup.object({
  email: yup
    .string()
    .email('Email không đúng định dạng')
    .required('Email bắt buộc')
    .min(5, 'Độ dài từ 5 - 255 kí tự')
    .max(255, 'Độ dài từ 5 - 255 kí tự'),
  password: yup
    .string()
    .required('Mật khâu bắt buộc')
    .min(5, 'Độ dài từ 10 - 255 kí tự')
    .max(255, 'Độ dài từ 10 - 255 kí tự'),
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Độ dài từ 5 - 100 kí tự')
    .max(100, 'Độ dài từ 5 - 100 kí tự'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password confirmation must match')
    .required('Xác thực mật khâu phải bắt buộc')
    .min(10, 'Độ dài từ 10 - 255 kí tự')
    .max(255, 'Độ dài từ 10 - 255 kí tự'),
  fullName: yup.string().required('Full name is required')
});

export type Schema = yup.InferType<typeof schema>;
