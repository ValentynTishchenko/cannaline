import axios from 'axios';
import validator from 'validator';

const resetFeedBackFrom = () => {
  document.getElementById('customer-number').value = '';
  document.getElementById('customer-email').value = '';
  document.getElementById('customer-comment').value = '';
};


const resetFeedbackError = () => {
  document.getElementById('customer-email-container').classList.remove('error-field');
  document.getElementById('customer-number-container').classList.remove('error-field');
};

const URL = 'https://cannaline-email-sender.herokuapp.com/api/send-email';

const sendFeedback = async (e) => {
  e.preventDefault();
  resetFeedbackError();

  const number = document.getElementById('customer-number').value;
  const email = document.getElementById('customer-email').value;
  const comment = document.getElementById('customer-comment').value;

  let isValid = true;

  if (!validator.isEmail(email)) {
    document.getElementById('customer-email-container').classList.add('error-field');
    isValid = false;
  }

  if (!validator.isMobilePhone(number, 'uk-UA')) {
    document.getElementById('customer-number-container').classList.add('error-field');
    isValid = false;
  }

  if (validator.isEmpty(comment)) {
    document.getElementById('customer-comment-container').classList.add('error-field');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  try {
    await axios.post(URL, {number, email, comment});
    resetFeedBackFrom();
    document.getElementById('feedback-modal').classList.remove('has-display-none');
  } catch (e) {
    console.log('smth went wrong: ', e);
  }
};

const hideFeedbackModal = () => {
  document.getElementById('feedback-modal').classList.add('has-display-none');
};

export const initFeedbackForm = () => {
  document.getElementById('send-feedback-button').addEventListener("click", sendFeedback);
  document.getElementById('feedback-modal-background-wrapper').addEventListener('click', hideFeedbackModal);
  document.getElementById('close-modal-btn').addEventListener('click', hideFeedbackModal);
};