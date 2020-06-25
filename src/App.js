import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      currentTransaction: 0,
    }
  }

  handleTyping = (event) => {
    //console.log('we r typing ???', parseInt(event.target.value)) 
    this.setState({currentTransaction: parseInt(event.target.value) })
  }

  handleSave = () => {
    var oldTransactions = this.state.transactions
    var newTransaction = oldTransactions.concat(this.state.currentTransaction)
    this.setState({transactions: newTransaction})
  }

  render() {

    console.log('this is our state!!!', this.state)

    let total = 0
    for (let i = 0; i < this.state.transactions.length; i++) {
     total += this.state.transactions[i]
      
    }

    return (
      <div>
        <h1> Add a transaction </h1>
        <input onChange={this.handleTyping}></input>
        <button onClick={this.handleSave}>Save Transaction</button>

        <h1> Grand Total: ${total} </h1>
        <ul>
        {this.state.transactions.map((singleNum)=>{
          return(
            <li>
              {singleNum}
            </li>
          )
        })}
        

          </ul>
        

      </div>
    );

    
  }
}

export default App;
