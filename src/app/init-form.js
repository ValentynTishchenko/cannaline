const resetFeedBackFrom = () => {
  document.getElementById('customer-number').value = '';
  document.getElementById('customer-email').value = '';
};

const sendFeedback = () => {
  const customerNumber = document.getElementById('customer-number').value;
  const customerEmail = document.getElementById('customer-email').value;
  
};
export const initForm = () => {
  document.getElementById('send-feedback-button').addEventListener("click", sendFeedback);
};