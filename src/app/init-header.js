const openNavigationClassName = 'open-navigation';

const headerNavigationId = 'header-navigation';
const closeMobileHeaderId = 'close-mobile-header';
const menuIconId = 'menu-icon';

function closeMobileHeader() {
  document.getElementById(headerNavigationId).classList.remove(openNavigationClassName);
  document.getElementById(headerNavigationId).removeEventListener('click', closeMobileHeader);
}

const openMobileHeader = (e) => {
  e.stopPropagation();

  document.getElementById(headerNavigationId).classList.add(openNavigationClassName);
  document.getElementById(headerNavigationId).addEventListener('click', closeMobileHeader);
};

export const initHeader = () => {
  document.getElementById(menuIconId).addEventListener('click', openMobileHeader);
  document.getElementById(closeMobileHeaderId).addEventListener('click', closeMobileHeader);
};