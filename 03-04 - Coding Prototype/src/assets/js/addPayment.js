import toggos from './helperPlugins'

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
        const valuespan1 = document.createElement('span');
        const valuespan2 = document.createElement('span');
        const valuespan3 = document.createElement('span');
        if(dataTransType === 'Income'){
            valuespan1.setAttribute("class", "income znamenko");
            valuespan2.setAttribute("class", "income val");
            valuespan3.setAttribute("class", "income");
            valuespan1.innerHTML = '+ ';
            valuespan2.innerHTML = transValue;
            valuespan3.innerHTML = ' CZK';
  }
        else{
            valuespan1.setAttribute("class", "expense znamenko");
            valuespan2.setAttribute("class", "expense val");
            valuespan3.setAttribute("class", "expense");
            valuespan1.innerHTML = '- ';
            valuespan2.innerHTML = transValue;
            valuespan3.innerHTML = ' CZK';
        }
        valuediv.appendChild(valuespan1);
        valuediv.appendChild(valuespan2);
        valuediv.appendChild(valuespan3);


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





