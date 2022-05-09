import '../styles/main.scss';

import {initPriceTabs} from './init-price-tabs';
import {initHeader} from './init-header';
import {initForm} from "./init-form";


window.addEventListener("load", function () {
  initPriceTabs();
  initHeader();
  initForm();
});
