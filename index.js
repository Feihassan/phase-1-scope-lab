// Write your solution in this file
var customerName = 'bob'; // must be var to be globally accessible for the test
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob'; // must be var to be globally accessible for the test
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // must be var to be globally accessible for the test
}

 const leastFavoriteCustomer = 'bob'; // must be var to be globally accessible for the test
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // will throw an error
}
