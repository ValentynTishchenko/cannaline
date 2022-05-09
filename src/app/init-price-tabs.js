function onPriceTabClick() {
  const parentNode = this.parentNode;

  if (parentNode.className.includes('price-list__item')) {
    if (parentNode.className.includes('expanded')) {
      parentNode.classList.remove('expanded');
    } else {
      parentNode.classList.add('expanded');
    }

  }
}

export const initPriceTabs = () => {
  const tabs = document.getElementsByClassName('price-list__item-compound');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', onPriceTabClick);
  }
};
