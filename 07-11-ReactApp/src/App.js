import React, { Component } from 'react';
import transactions from './data/transactions'
import TransactionPage from './components/TransactionPage';
import Overview from './components/Overview'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuRoot = styled.div`
   top: 0;
   width: 100%;
   position: fixed;
   background-color: #F1EADE;
   height: 11vh;
   font-weight: bold;
   align-items: center;
   display: flex;
   text-align: center;
   a {text-decoration: none;
      color: #333333;}
`;


const MenuItem = styled.div`
  width: 100%;
  padding: 12px;
  font-weight: bold;
  border: 0;
  flex: 50%;
  padding: 15px;
  text-transform: uppercase;
  width: 100%;`;

class App extends Component {
  state = { stateTransactions: []}

  componentDidMount(){
    this.setState({stateTransactions: transactions})
  }

  deleteTransaction = (transaction)=> {
    const newTransactions = this.state.stateTransactions.filter(
      object => JSON.stringify(transaction) !== JSON.stringify(object))
    this.setState({stateTransactions: newTransactions})
  }


  addTransaction = (inName, inVal, inType, inCreated)=>{
    const newTrans = {name: inName, type: inType, value: parseInt(inVal), created: inCreated}
    const newArray = this.state.stateTransactions.slice();
    newArray.unshift(newTrans);
    this.setState({stateTransactions: newArray})
  }

  editTransaction = (transaction, inName, inVal, inType, inCreated)=>{
    const newArray = this.state.stateTransactions.slice();
    const edited = newArray.indexOf(transaction)
    newArray[edited].name = inName;
    newArray[edited].value = parseInt(inVal);
    newArray[edited].type = inType;
    newArray[edited].created = inCreated;
    this.setState({stateTransactions: newArray})
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <header>
            <MenuRoot>
              <MenuItem><Link to="/">Transactions</Link></MenuItem>
              <MenuItem><Link to="/overview">Overview</Link></MenuItem>
            </MenuRoot>
           </header>
          <Route exact path={"/"} component={() => <TransactionPage editTransaction={this.editTransaction}
                                                                    addTransaction={this.addTransaction}
                                                                    deleteTransaction={this.deleteTransaction}
                                                                    stateTransactions={this.state.stateTransactions}/>}/>
          <Route path="/overview" component={ () => <Overview stateTransactions={this.state.stateTransactions}/>}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
