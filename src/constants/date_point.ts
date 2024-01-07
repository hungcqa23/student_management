export const hour_points = () => {
  const arr: {
    value: string;
    label: string;
  }[] = [];
  for (let i = 0; i < 24; i++) {
    arr.push({
      value: `${i}:00`,
      label: `${i}:00`
    });
    arr.push({
      value: `${i}:30`,
      label: `${i}:30`
    });
  }
  return arr;
};
