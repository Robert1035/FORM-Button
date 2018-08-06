import React, { Component } from 'react';
import './App.css';
import './Main.css'



class Main extends React.Component {
    constructor(props) {
        super(props);
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

        let style1 ={listStyle:"none"};
        let style = {marginTop:'70px'};

        let list = this.state.items.map((item, index) => {
            return <li key={index}>{item}

                <button className="btn-danger" onClick={this.deleteItem.bind(this, index)}>
                    delete
                </button>

            </li>;
        });
        return (
            <div>
                <ul style={style1}>

                    {list}

                </ul>

                <form className="form-check-inline" onSubmit={this.addItem.bind(this)}>
                    <input
                        placeholder="surname"
                        value={this.state.value}
                        onChange={this.Change.bind(this)}
                    />
                    <input type="submit" value='Добавить-ADD'  style={style}  className="btn-outline-primary"/>
                </form>
            </div>
        );
    }

}

export default Main;