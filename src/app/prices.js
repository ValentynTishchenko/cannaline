import {toggleClassName} from './helpers';

function onPriceTabClick() {
  const parentNode = this.parentNode;

  if (parentNode.className.includes('price-list__item')) {
    toggleClassName(parentNode, 'expanded');
  }
}

export const initPricesItem = () => {
  const tabs = document.getElementsByClassName('price-list__item-compound');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', onPriceTabClick);
  }
};
