export const MemberPrice = () => {
  const price = 36;
  const d = new Date();
  const currentMonth = parseInt(d.getMonth() + 1);

  if (currentMonth >= 4) {
    return price - (currentMonth - 4) * 3;
  } else if (currentMonth <= 3) {
    return price - (currentMonth + 8) * 3;
  } else return price;
};
