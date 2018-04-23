import toggos from './helperPlugins'
import del from './deletePayment'

const saveBttn = document.querySelector(".save-button");
// Function executed upon clicking "Save"
saveBttn.addEventListener("click", (e) => {
    // Turns off toggle for a brief time
    toggos.toggle();

    // Form input variables
    const transName = document.querySelector('.trans-name').value;
    const transType = document.querySelector(".trans-type");
    const dataTransType = transType.options[transType.selectedIndex].value;
    const transValue = document.querySelector(".trans-value").value;
    const transCreated = document.querySelector(".trans-date").value;

    //Check that all fields are filled out
    if (transName !== '' && transValue !== '' && transCreated !== ''){

        //Div for transaction name
        const namediv = document.createElement('div');
        namediv.setAttribute("class", "transaction-name");
        namediv.innerHTML = transName;

        // Div for transaction value
        const valuediv = document.createElement('div');
        valuediv.setAttribute("class", "transaction-value");
        const valuespan = document.createElement('span');
        if(dataTransType === 'Income'){
            valuespan.setAttribute("class", "income");
            valuespan.innerHTML = '+' +  transValue + ' CZK';
        }
        else{
            valuespan.setAttribute("class", "expense");
            valuespan.innerHTML = '-' +  transValue  + ' CZK';
        }
        valuediv.appendChild(valuespan);

        // Div for transaction date
        const datediv = document.createElement('div');
        datediv.setAttribute("class", "transaction-date");
        datediv.innerHTML = transCreated;

        // Visible div
        const rowdiv = document.createElement('div');
        rowdiv.setAttribute("class", "transaction-row");
        rowdiv.appendChild(namediv);
        rowdiv.appendChild(valuediv);

    
        // Buttons
        const buttons = document.createElement('div');
        buttons.innerHTML = document.querySelector("#knofle").innerHTML

        // Expanding div
        const expanddiv = document.createElement('div');
        const expandrowdiv = document.createElement('div');
        expanddiv.setAttribute("class", "transaction-expand");
        expandrowdiv.setAttribute("class", "expand-row");
        expandrowdiv.appendChild(datediv);
        expandrowdiv.appendChild(buttons);
        expanddiv.appendChild(expandrowdiv);

        // Li element and appending to the list
        const transList = document.querySelector(".transaction-list");
        const li = document.createElement('li');
        li.setAttribute("class", "transaction");
        li.setAttribute("data-toggle", ".transaction-expand");
        li.appendChild(rowdiv);
        li.appendChild(expanddiv);
        transList.insertBefore(li, transList.firstChild);

        // Total balance overview update
        let total = document.querySelector(".totalB");
        const totalInt = parseInt(total.innerHTML);
        const valueInt = parseInt(transValue);
        if (dataTransType === 'Income'){
            total.innerHTML = totalInt + valueInt;
        }
        else{
            total.innerHTML = totalInt - transValue;
        } 
        
        // Reinitializes toggle
        toggos.toggle();

    }
    else{
        alert("Please fill out all the fields");
        // Reinitializes toggle
        toggos.toggle();
    }
})





