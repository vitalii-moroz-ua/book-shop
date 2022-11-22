const deliveryDate = document.querySelector("#delivery-date");
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(deliveryDate);
deliveryDate.min = `${tomorrow.getFullYear()}-${
  tomorrow.getMonth() + 1
}-${tomorrow.getDate()}`;
deliveryDate.value = `${tomorrow.getFullYear()}-${
  tomorrow.getMonth() + 1
}-${tomorrow.getDate()}`;
