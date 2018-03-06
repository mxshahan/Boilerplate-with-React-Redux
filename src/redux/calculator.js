import React from 'react';
import ReactDOM , { render } from 'react-dom';
import {createStore} from 'redux';

const Reducer = (state = {count: 0}, action) => {
    const value = action.payloads;
    switch (action.type){
        case 'ADD':
            return {
                count: value.first + value.second
            };
        case 'SUB':
            return {
                count: value.first - value.second
            };
        case 'MUL':
            return {
                count: value.first * value.second
            };
        case 'DIV':
            return {
                count: value.first / value.second
            };
        default:
            return state
    }
};

const store = createStore(Reducer)

const setValue = (value) => {
    document.getElementById('res').innerHTML = value
};


store.subscribe( () => {
    const states = store.getState();
    setValue(states.count);
})

class App extends React.Component{

    getValue = () => {
        const value = {
            first: parseFloat(this.refs.inp.value),
            second: parseFloat(this.refs.inp2.value)
        };
        // this.refs.inp.value = '';
        // this.refs.inp2.value = '';

        return value
    };

    Add = () => {
        store.dispatch({
            type: 'ADD',
            payloads: this.getValue(),
            operator: '+'
        })
    };

    Sub = () => {
        store.dispatch({
            type: 'SUB',
            payloads: this.getValue(),
            operator: '-'
        })
    };

    Mul = () => {
        store.dispatch({
            type: 'MUL',
            payloads: this.getValue(),
            operator: 'X'
        })
    };

    Div = () => {
        store.dispatch({
            type: 'DIV',
            payloads: this.getValue(),
            operator: '/'
        })
    };



    render(){
        return(
            <div className="container">
                    <div className="col-md-12">
                        <h1>Calculator | <span id="res" ref="result" className="text-success">0</span></h1>
                    </div>
                    <div className="col-md-6 ">
                        <input ref="inp" type="number" placeholder="Enter First Number" className="form-control"/>
                        <input ref="inp2" type="number" placeholder="Enter Second Number" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-success" onClick={this.Add}>+</button>
                        <button className="btn btn-danger" onClick={this.Sub}>-</button>
                        <button className="btn btn-info" onClick={this.Mul}>*</button>
                        <button className="btn btn-warning" onClick={this.Div}>/</button>
                    </div>

            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))