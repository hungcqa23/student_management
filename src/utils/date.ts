export const dayOfWeekMap = {
  Monday: 'Thứ hai',
  Tuesday: 'Thứ ba',
  Wednesday: 'Thứ tư',
  Thursday: 'Thứ năm',
  Friday: 'Thứ sáu',
  Saturday: 'Thứ bảy',
  Sunday: 'Chủ nhật'
};

export const convertToVietnameseDayAndTime = (dayAndTime: string) => {
  // Tách ngày và khoảng thời gian từ chuỗi
  const dates = dayAndTime.split(' ');

  // Ánh xạ ngày từ tiếng Anh sang tiếng Việt
  const dayOfWeekMap = {
    Monday: 'Thứ hai',
    Tuesday: 'Thứ ba',
    Wednesday: 'Thứ tư',
    Thursday: 'Thứ năm',
    Friday: 'Thứ sáu',
    Saturday: 'Thứ bảy',
    Sunday: 'Chủ nhật'
  };

  const vietnameseDay = dayOfWeekMap[dates[0] as keyof typeof dayOfWeekMap];

  if (vietnameseDay) {
    const convertedString = `${vietnameseDay} ${dates[1]} - ${dates[3]}`;
    return convertedString;
  } else {
    // Trường hợp không tìm thấy ngày trong tuần
    return 'Ngày không hợp lệ';
  }
};
