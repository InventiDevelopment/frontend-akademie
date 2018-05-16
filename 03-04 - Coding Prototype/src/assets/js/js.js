function init (){const payments = [
    {
      accountType: "CZK",
      amount: 400,
      description: "Ponožky"
    },
    {
      accountType: "EUR",
      amount: 55,
      description: "Nové kolo"
    },
    {
      accountType: "CZK",
      amount: 300,
      description: "Outdoor bunda"
    },
    {
      accountType: "EUR",
      amount: 300,
      description: "Poplatek univerzita"
    }
  ];
  
  // Jak je možné, že můžeme do pole deklarovaného pomocí "const" přidat novou položku?
  payments.push(  
    {
      accountType: "CZK",
      amount: 1200,
      description: "Koncert Rudolfinum"
    }
  );
  
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
  
  // Je dobré si všimnout, že zde používáme v praxi scope i closure!
  // To ale často můžeme přehlédnout, proto bude lepší dle mého názoru explicitně přidat anonymní funkcí argument "payment", do kterého budeme vkládat vždy explicitně danou položku, ze které chceme získat atributy ".amount" a ".accountType"
  payments.forEach(function(payment, index) {
    payment.castkaPrint = function() {
      return `${payment.amount} ${getCurrencySymbol(payment.accountType)}`;
    }
  });

};
  