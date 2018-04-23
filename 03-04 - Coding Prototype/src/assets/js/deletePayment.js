let yesBtn = document.querySelector(".yes");
var delBtn = document.querySelectorAll(".delete-button");

// Vybere všechny delete buttony
function selectBtns() {
    for (let  i = 0; i < delBtn.length; i++) {
        // Funkce, která se spustí kliknutím na delete
        delBtn[i].addEventListener("click", (e) => {
            // Vybere parent transakci kliknutého buttonu
            let par = event.target.parentNode.parentNode.parentNode.parentNode;
            let par1 = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
            let isnotTrans = par1.classList.contains('transaction-list')
            console.log(isnotTrans)
            if (isnotTrans){
                par1 = par;
            }
            console.log(par1);
            // Po kliknutí na yes dojde ke smazání a přepsání total balance
            yesBtn.addEventListener("click", (e) => {
                const mark = par1.querySelector('.znamenko').innerHTML
                const val = par1.querySelector(".val").innerHTML;
                par1.innerHTML = "";
                par1.style.display = "none";
                let total = document.querySelector(".totalB");
                console.log(val)
                const totalInt = parseInt(total.innerHTML);
                const valueInt = parseInt(val);
                console.log(mark)

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

