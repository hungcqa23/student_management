export default function Header() {
  return (
    <header className='fixed left-60 right-0 top-0 bg-neutral-800'>
      <div className='flex h-full items-center justify-between px-6 py-3'>
        <div>
          <h1 className='mb-3 text-3xl font-bold text-white'>
            <span className='font-light'>Xin chào</span> Lý Thanh Tú Anh
          </h1>
          <p className='text-sm font-light text-white'>
            Cùng EduHub quản lý các lớp học và học viên của bạn.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <svg
            width={19}
            height={19}
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <rect width={19} height={19} fill='url(#pattern0)' />
            <defs>
              <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
                <use xlinkHref='#image0_368_3001' transform='scale(0.0078125)' />
              </pattern>
              <image
                id='image0_368_3001'
                width={128}
                height={128}
                xlinkHref='data:image/png;base64,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'
              />
            </defs>
          </svg>
          <button className='inline-block text-sm font-bold text-zinc-300 hover:underline'>
            Đăng xuất
          </button>
        </div>
      </div>
    </header>
  );
}
