import '../styles/main.scss';

import {initPricesItem} from './prices';
import {initHeader} from './header';
import {initFeedbackForm} from "./feedback-form";

window.addEventListener("load", function () {
  initPricesItem();
  initHeader();
  initFeedbackForm();
});
