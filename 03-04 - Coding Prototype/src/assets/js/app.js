// import any 3rd party or custom libraries here
import moment from 'moment'
import helpers from './helperPlugins'

window.moment = moment
// initialize helper plugins
helpers.toggle()

const payments = [
  {
    accountType: 'EUR',
    amount: 10,
    description: 'Tričko'
  },
  {
    accountType: 'EUR',
    amount: 6,
    description: 'Kniha'
  },
  {
    accountType: 'CZK',
    amount: 900,
    description: 'Džíny'
  },
  {
    accountType: 'CZK',
    amount: 8000,
    description: 'Kulečník'
  },
  {
    accountType: 'CZK',
    amount: 31999,
    description: 'Iphone X'
  }
]

const paymentsList = document.querySelector('.payments-list')

const currencySymbol = (accountType) => {
  let currencySymbol = ''
  if (accountType === 'CZK') {
    currencySymbol = 'Kč'
  }

  if (accountType === 'EUR') {
    currencySymbol = '€'
  }

  return currencySymbol
}

function wallet (payments) {
  paymentsList.innerHTML = ''

  payments.forEach(function (payment) {
    payment.castkaPrint = function () {
      return `${payment.amount} ${currencySymbol(payment.accountType)}`
    }
  })

  const amountCZK = payments.filter((payment) => payment.accountType === 'CZK').reduce((prev, current) => prev + current.amount, 0)
  const amountEUR = payments.filter((payment) => payment.accountType === 'EUR').reduce((prev, current) => prev + current.amount, 0)

  const spentCZK = document.querySelector('.spent-czk-box')
  spentCZK.innerHTML = `${amountCZK} ${currencySymbol('CZK')}`

  const spentEUR = document.querySelector('.spent-eur-box')
  spentEUR.innerHTML = `${amountEUR} ${currencySymbol('EUR')}`

  payments.forEach(function (payment) {
    const newPaymentLi = document.createElement('li')
    newPaymentLi.setAttribute('class', 'payment')
    newPaymentLi.innerHTML = `${payment.accountType} | ${payment.description} | ${payment.castkaPrint()}`
    paymentsList.appendChild(newPaymentLi)
  })
}

wallet(payments)

