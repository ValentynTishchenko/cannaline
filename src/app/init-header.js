const toggleHeader = () => {
  console.log('toggleHeader');
};
export const initHeader = () => {
  document.getElementById('menu-icon').addEventListener('click', toggleHeader);
};