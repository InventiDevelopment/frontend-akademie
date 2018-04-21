const payments = JSON.parse('src/data/transactions.json')

payments.push(
  {
    accountType: 'CZK',
    amount: 1200,
    description: 'Koncert Rudolfinum'
  }
)

const getCurrencySymbol = (accountType) => {
  let currencySymbol = ''

  if (accountType === 'CZK') {
    currencySymbol = 'Kč'
  }

  if (accountType === 'EUR') {
    currencySymbol = '€'
  }

  return currencySymbol
}

// To ale často můžeme přehlédnout, proto bude lepší dle mého názoru explicitně přidat anonymní funkcí argument 'payment', do kterého budeme vkládat vždy explicitně danou položku, ze které chceme získat atributy '.amount' a '.accountType'
payments.forEach(function (payment, index) {
  payment.castkaPrint = function () {
    return `${payment.amount} ${getCurrencySymbol(payment.accountType)}`
  }
})

// Vypočítání útraty za jednotlivé měny
const amountCZK = payments.
  filter((payment) => payment.accountType === 'CZK').
  reduce((prev, current) => prev + current.amount, 0)

const amountEUR = payments
  .filter((payment) => payment.accountType === 'EUR')
  .reduce((prev, current) => prev + current.amount, 0)

const utrataCZKPlaceholder = document.querySelector('.utrata-czk-placeholder')
utrataCZKPlaceholder.innerHTML = `${amountCZK} ${getCurrencySymbol('CZK')}`

const utrataEURPlaceholder = document.querySelector('.utrata-eur-placeholder')
utrataEURPlaceholder.innerHTML = `${amountEUR} ${getCurrencySymbol('EUR')}`

// Hraní s DOM a vytváření elementů
const paymentsList = document.querySelector('.transaction-list')

payments.forEach(function (paymentItem, index) {

  const newPaymentLi = document.createElement('li')

  newPaymentLi.setAttribute('class', 'transaction')
  newPaymentLi.innerHTML = `${paymentItem.accountType} | ${paymentItem.description} | ${paymentItem.castkaPrint()}`
  paymentsList.appendChild(newPaymentLi)
})

const buttonAdd = document.querySelector('.button-add')
buttonAdd.addEventListener('click', (e) => {
  // get elements from the form
  // my own convention to use '$' to indicate the variable consists of a reference to a DOM element, not a JS data type
  const accountType = document.querySelector('.form-account-type')
  const accountDesc = document.querySelector('.form-account-desc')
  const accountPrice = document.querySelector('.form-account-price')

  const dataAccountType = accountType.options[accountType.selectedIndex].value
  console.log(dataAccountType)

  const dataAccountDesc = accountDesc.value
  const dataAccountPrice = accountPrice.value
  console.log(dataAccountDesc)
  const newPaymentItem = document.createElement('li')
  newPaymentItem.setAttribute('class', 'payment')

  newPaymentItem.innerHTML = `${dataAccountType} | ${dataAccountDesc} | ${dataAccountPrice}`

  paymentsList.appendChild(newPaymentItem)

  return false
})
