export const getMonth = () => {
  const d = new Date();
  const currentMonth = parseInt(d.getMonth() + 1);
  return currentMonth;
};
