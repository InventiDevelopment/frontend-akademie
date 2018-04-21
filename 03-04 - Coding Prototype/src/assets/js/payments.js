const list = document.querySelector('.transaction-list')
const transaction = document.querySelector('.transaction')

//Adding new transaction into transaction list
const btnAdd = document.querySelector('.btn-save')
btnAdd.addEventListener('click', (e) => {

  
  //Input form values
  const name = document.querySelector('.transaction-name').value
  const amount = document.querySelector('.transaction-amount').value
  





  const newTransaction = document.createElement('li')
  newTransaction.setAttribute('class', 'transaction')
  newTransaction.innerHTML = `<div class="transaction-row">
                                <span class="transaction-name">${name}</span>
                              <div class="transaction-value">
                                <span class="value">${amount}</span>
                              </div>
                              </div>`
  
  list.appendChild(newTransaction)
})
// Form input variables






// const getCurrencySymbol = (accountType) => {
//   let currencySymbol = ''

//   if (accountType === 'CZK') {
//     currencySymbol = 'Kč'
//   }

//   if (accountType === 'EUR') {
//     currencySymbol = '€'
//   }

//   return currencySymbol
// }

// payment.forEach(function (payment, index) {
//   payment.castkaPrint = function () {
//     return `${payment.amount} ${getCurrencySymbol(payment.accountType)}`
//   }
// })

// // Vypočítání útraty za jednotlivé měny
// const amountCZK = payments.
//   filter((payment) => payment.accountType === 'CZK').
//   reduce((prev, current) => prev + current.amount, 0)

// const amountEUR = payments
//   .filter((payment) => payment.accountType === 'EUR')
//   .reduce((prev, current) => prev + current.amount, 0)

// const utrataCZKPlaceholder = document.querySelector('.utrata-czk-placeholder')
// utrataCZKPlaceholder.innerHTML = `${amountCZK} ${getCurrencySymbol('CZK')}`

// const utrataEURPlaceholder = document.querySelector('.utrata-eur-placeholder')
// utrataEURPlaceholder.innerHTML = `${amountEUR} ${getCurrencySymbol('EUR')}`

// // Hraní s DOM a vytváření elementů
// const paymentsList = document.querySelector('.transaction-list')

// payments.forEach(function (paymentItem, index) {

//   const newPaymentLi = document.createElement('li')

//   newPaymentLi.setAttribute('class', 'transaction')
//   newPaymentLi.innerHTML = `${paymentItem.accountType} | ${paymentItem.description} | ${paymentItem.castkaPrint()}`
//   paymentsList.appendChild(newPaymentLi)
// })

// const buttonAdd = document.querySelector('.button-add')
// buttonAdd.addEventListener('click', (e) => {
//   // get elements from the form
//   // my own convention to use '$' to indicate the variable consists of a reference to a DOM element, not a JS data type
//   const accountType = document.querySelector('.form-account-type')
//   const accountDesc = document.querySelector('.form-account-desc')
//   const accountPrice = document.querySelector('.form-account-price')

//   const dataAccountType = accountType.options[accountType.selectedIndex].value
//   console.log(dataAccountType)

//   const dataAccountDesc = accountDesc.value
//   const dataAccountPrice = accountPrice.value
//   console.log(dataAccountDesc)
//   const newPaymentItem = document.createElement('li')
//   newPaymentItem.setAttribute('class', 'payment')

//   newPaymentItem.innerHTML = `${dataAccountType} | ${dataAccountDesc} | ${dataAccountPrice}`

//   paymentsList.appendChild(newPaymentItem)

//   return false
// })
