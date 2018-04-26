import React from 'react';
import transactions from '../data/transactions';
import TransactionContainer from './TransactionContainer';

export default class TransactionList extends React.Component {
    constructor() {
        super();

        this.state = {

            currencies: [
                { value: '820', name: 'ut ipsum'}
            ],
            allItems: []
        };

        this.fetchData = this.fetchData.bind(this);
        this.storeDataToState = this.storeDataToState.bind(this);
    }

    fetchData = (obj) => {
        return obj;
    };

    storeDataToState = () => {
        let gotItems = this.fetchData(transactions);
        let items = {};
        let newState = [];

        for (let item in gotItems) {

            items[item] = gotItems[item];

            newState.unshift({
                name: items[item].profiles,
                value: items[item].priceEur
            });

            this.setState({
                allItems: newState,
            });
        }
    };

    componentDidMount() {
        this.storeDataToState();
    }



    render(){
        return(
            <ul>
                {
                    this.state.data.map((v, i) =>
                        <div  key={i}>
                            <TransactionContainer data={v} />
                            <p>{v.id}</p>
                            <p>{v.name}</p>
                            <button data-id={v.id} onClick={this.delete}>test</button>
                        </div>
                    )
                }

            </ul>
        )
    }
}