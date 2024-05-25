const generateDates = (days) => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < days; i++) {
    const newDate = new Date();
    newDate.setDate(today.getDate() + i);
    dates.push(newDate);
  }
  return dates;
};

export default generateDates;
