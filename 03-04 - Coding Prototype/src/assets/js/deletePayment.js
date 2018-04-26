let yesBtn = document.querySelector(".yes");
var delBtn = document.querySelectorAll(".delete-button");

// Vybere všechny delete buttony
function selectBtns() {
    for (let  i = 0; i < delBtn.length; i++) {
        // Funkce, která se spustí kliknutím na delete
        delBtn[i].addEventListener("click", (e) => {
            // Po kliknutí na yes dojde ke smazání a přepsání total balance
            yesBtn.addEventListener("click", (e) => {
              // Vybere parent transakci kliknutého buttonu
                let par = document.querySelectorAll(".transaction");
                let par1 = par[i];
                const mark = par1.querySelector('.znamenko').innerHTML
                const val = par1.querySelector(".val").innerHTML;
                const ul = document.querySelector(".transaction-list");
                ul.removeChild(par1);
                par1.innerHTML = "";
                par1.style.display = "none";
                let total = document.querySelector(".totalB");
                const totalInt = parseInt(total.innerHTML);
                const valueInt = parseInt(val);

                if (mark === '+'){
                    total.innerHTML = totalInt - valueInt;
                }
                else{
                    total.innerHTML = totalInt + valueInt;
                } 
            })
        })
    }
}
window.addEventListener("load",function() {
    selectBtns();
  });

