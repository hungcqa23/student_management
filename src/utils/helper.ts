export const calculateAverageGrade = (grades: Record<number, number>) => {
  const gradesArray = Object.values(grades);
  const sum = gradesArray.reduce((a, b) => a + b, 0);
  return Math.round((gradesArray.length > 0 ? sum / gradesArray.length : 0) * 100) / 100;
};
