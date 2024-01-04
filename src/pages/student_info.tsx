export default function StudentInfo() {
  return (
    <div className='text-normal flex flex-col gap-2'>
      <h1 className='mb-4 text-2xl font-bold uppercase text-black'>Thông tin học viên</h1>

      <p>
        Họ và tên: <span className='text-base font-semibold text-black'>Nguyễn Thanh Huy</span>
      </p>
      <p>
        Ngày sinh: <span className='text-base font-semibold text-black'>19/03/2003</span>
      </p>
      <p>
        Lớp: <span className='text-base font-semibold text-black'>Giải tích 1</span>
      </p>
      <p>
        Trạng thái: <span className='text-base font-semibold text-black'>Đang học</span>
      </p>
      <p>
        Số điện thoại: <span className='text-base font-semibold text-black'>0123563598</span>{' '}
      </p>
      <p>
        Email cá nhân: <span className='text-base font-semibold text-black'>TqzYV@example.com</span>
      </p>
      <p>
        Địa chỉ liên lạc:{' '}
        <span className='text-base font-semibold text-black'>
          371 Đoàn Kết, phường Bình Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh
        </span>
      </p>
      <p>
        Tên người thân: <span className='text-base font-semibold text-black'>Lý Thanh Tú Em</span>
      </p>
      <div>
        Số điện thoại người thân:{' '}
        <span className='text-base font-semibold text-black'>0165968552</span>
      </div>
      <div>
        Địa chỉ liên lạc người thân:{' '}
        <span className='text-base font-semibold text-black'>
          371 Đoàn Kết, phường Bình Thọ, Thành phố Thủ Đức, Thành phố Hồ Chí Minh
        </span>
      </div>
    </div>
  );
}
