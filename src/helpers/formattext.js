function formatText(words) {
  const capitalized = words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return capitalized;
}

export default formatText;
