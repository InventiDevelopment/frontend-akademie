// import any 3rd party or custom libraries here
import moment from 'moment'
import helpers from './helperPlugins'

window.moment = moment
// initialize helper plugins
helpers.toggle()

const getCurrencySymbol = (accountType) => {

    let currencySymbol = "";

    if (accountType == "CZK") {
        currencySymbol = "Kč";
    }

    if (accountType == "EUR") {
        currencySymbol = "€";
    }

    return currencySymbol;

};

payments.forEach(function(payment, index) {
    payment.castkaPrint = function() {
        return `${payment.amount} ${getCurrencySymbol(payment.accountType)}`;
    }
});

// Vypočítání útraty za jednotlivé měny
const amountCZK = payments.
filter((payment) => payment.accountType === "CZK").
reduce((prev, current) => prev + current.amount, 0);

const amountEUR = payments
    .filter((payment) => payment.accountType === "EUR")
.reduce((prev, current) => prev + current.amount, 0);

const utrataCZKPlaceholder = document.querySelector(".utrata-czk-placeholder");
utrataCZKPlaceholder.innerHTML = `${amountCZK} ${getCurrencySymbol("CZK")}`;

const utrataEURPlaceholder = document.querySelector(".utrata-eur-placeholder");
utrataEURPlaceholder.innerHTML = `${amountEUR} ${getCurrencySymbol("EUR")}`;

// Vytváření elementů
const paymentsList = document.querySelector(".transaction-list");

const payments = [
    {
        accountType: "CZK",
        amount: 400,
        description: "Ponožky"
    }
];

payments.forEach(function(paymentItem, index) {

    const newPaymentLi = document.createElement("li");
    newPaymentLi.setAttribute("class", "payment");
    newPaymentLi.innerHTML = `${paymentItem.accountType} | ${paymentItem.description} | ${paymentItem.castkaPrint()}`;
    paymentsList.appendChild(newPaymentLi);

});

const buttonAdd = document.querySelector(".btn btn--add");

buttonAdd.addEventListener("click", (e) => {

    console.log(alert(click));
    const $accountType = document.querySelector(".form-account-type");
    const $accountDesc = document.querySelector(".form-account-desc");
    const $accountPrice = document.querySelector(".form-account-price");

    const dataAccountType = $accountType.options[$accountType.selectedIndex].value;

    const dataAccountDesc = $accountDesc.value;
    const dataAccountPrice = $accountPrice.value;

    const $newPaymentItem = document.createElement("li");
    $newPaymentItem.setAttribute("class", "payment");

    $newPaymentItem.innerHTML = `${dataAccountType} | ${dataAccountDesc} | ${dataAccountPrice}`;

paymentsList.appendChild($newPaymentItem);

return false;

});

