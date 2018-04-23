let saveBtn = document.querySelector(".save-button-e");
let editBtn = document.querySelectorAll(".edit-btn");
let parent1;

// Vybere všechny edit buttony
function selectButtons() {
    for (let  i = 0; i < editBtn.length; i++) {
        // Funkce, která se spustí kliknutím na edit
        editBtn[i].addEventListener("click", (e) => {
            // Vybere parent transakci kliknutého buttonu
            let parent = document.querySelectorAll(".transaction");
            parent1 = parent[i];
            //Fills out transaction name
            let nameEl = parent1.querySelector(".transaction-name");
            const currName = nameEl.innerHTML;
            document.querySelector(".trans-name-e").value = currName;
            // Fills out transaction value
            let valueEl = parent1.querySelector(".val")
            let currValue = valueEl.innerHTML;
            document.querySelector(".trans-value-e").value = currValue;
            //Fills out transaction type
            let currType = parent1.querySelector(".znamenko").innerHTML;
            if (currType === "+"){
                document.querySelector(".trans-type-e").value = "Income";
            }
            else{document.querySelector(".trans-type-e").value = "Expense";}
            // Saves the changes
            saveBtn.addEventListener("click", (e) => {
                let prevValue;
                if(parent1.querySelector(".val").classList.contains("income")){
                    prevValue = parseInt(parent1.querySelector(".val").innerHTML);
                }else{
                    prevValue = (-parseInt(parent1.querySelector(".val").innerHTML));
                }
                console.log(prevValue)
                parent1.querySelector(".transaction-name").innerHTML = document.querySelector(".trans-name-e").value;
                parent1.querySelector(".val").innerHTML = document.querySelector(".trans-value-e").value;
                let dateEl = parent1.querySelector(".transaction-date");
                dateEl.innerHTML = document.querySelector(".trans-date-e").value;
                let newType = document.querySelector(".trans-type-e").value;
                let valspans = parent1.querySelector(".transaction-value").getElementsByTagName("span");;
                let total = document.querySelector(".totalB");
                let totalInt = parseInt(total.innerHTML);
                if (newType === "Expense"){
                    parent1.querySelector(".znamenko").innerHTML = "-";
                    valspans[0].setAttribute("class", "expense znamenko");
                    valspans[1].setAttribute("class", "expense val");
                    valspans[2].setAttribute("class", "expense");
                    total.innerHTML = totalInt - parseInt(parent1.querySelector(".val").innerHTML) - prevValue
                } else{
                    parent1.querySelector(".znamenko").innerHTML = "+";
                    valspans[0].setAttribute("class", "income znamenko");
                    valspans[1].setAttribute("class", "income val");
                    valspans[2].setAttribute("class", "income");
                    total.innerHTML = totalInt - prevValue + parseInt(parent1.querySelector(".val").innerHTML);
                }
            })
            })
        }
    }

window.addEventListener("load",function() {
    selectButtons();
  });

