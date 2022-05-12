import axios from 'axios';
import validator from 'validator';

const resetFeedBackFrom = () => {
  document.getElementById('customer-number').value = '';
  document.getElementById('customer-email').value = '';
  document.getElementById('customer-comment').value = '';
};

const URL = 'https://cannaline-email-sender.herokuapp.com/api/send-email';

const sendFeedback = async (e) => {
  e.preventDefault();

  const number = document.getElementById('customer-number').value;
  const email = document.getElementById('customer-email').value;
  const comment = document.getElementById('customer-comment').value;

  let isValid = true;

  if (!validator.isEmail(email)) {
    console.log('isEmail');
    isValid = false;
  }

  if (!validator.isMobilePhone(number, 'uk-UA')) {
    console.log('isMobilePhone');
    isValid = false;
  }

  if (validator.isEmpty(comment)) {
    console.log('isEmpty');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  try {
    console.log(await axios.post(URL, {number, email, comment}));
  } catch (e) {
    console.log('error: ', e);
    return;
  }

  console.log('sent');
};
export const initForm = () => {
  document.getElementById('send-feedback-button').addEventListener("click", sendFeedback);
};