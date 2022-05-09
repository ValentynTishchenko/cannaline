export const toggleClassName = (element, className) => {
  if (element.className.includes(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};