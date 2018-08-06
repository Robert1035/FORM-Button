import React, { Component } from 'react';
import './App.css';
import './Main.css'
import Main from './Main'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {items: [], value: ''};
    }

    addItem(event) {
        this.state.items.push(this.state.value);
        this.setState({items: this.state.items});

        event.preventDefault();
    }

    Change(event) {
        this.setState({value: event.target.value});
    }

    deleteItem(num) {
        this.state.items.splice(num, 1);
        this.setState({items: this.state.items});
    }


    render() {

        let styleInp ={listStyle:"none"};

        let list = this.state.items.map((item, index) => {
            return <li key={index}>
                {item}
                <button className="btn-danger" onClick={this.deleteItem.bind(this, index)}>
                    delete
                </button>
            </li>;
        });
        return (
            <div>
                <ul style={styleInp}>
                    {list}
                </ul>

                <form className="form-group" onSubmit={this.addItem.bind(this)}>
                    <div><Main/></div>
                    <input
                        placeholder="name"
                        value={this.state.value}
                        onChange={this.Change.bind(this)}

                    />

                </form>

            </div>
        );
    }}

export default App;
