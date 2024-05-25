const formatDate = (date) => {
  const options = { weekday: "short", day: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
};

export default formatDate;
