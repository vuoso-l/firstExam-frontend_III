import React, { Component } from 'react';
import data from "../dataBase/data.json";

class ShowHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      id: "",
      history: [], options: {
        a: "",
        b: "",
      },
      prevSelect: "",
      prevSelectHistory: [],
    }
  }

  componentDidMount() {
    this.setState({
      counter: this.state.counter + 1,
      id: `${data[0].id}`, history: `${data[0].historia}`, options: {
        a: `${data[0].opciones.a}`,
        b: `${data[0].opciones.b}`,
      }
    })
  }

  selectOption = (e) => {
    this.setState({ counter: this.state.counter + 1 })
    if (this.state.counter <= 5 && e.target.id === "a") {
      const filterDataOpA = data.filter((el) => el.id === (this.state.counter + "a"));
      this.setState({
        id: filterDataOpA[0].id, history: filterDataOpA[0].historia, options: {
          a: filterDataOpA[0].opciones.a,
          b: filterDataOpA[0].opciones.b,
        },
        prevSelect: e.target.id,
        prevSelectHistory: [...this.state.prevSelectHistory, this.state.prevSelect],
      });

    } else if (this.state.counter <= 5 && e.target.id === "b") {
      const filterDataOpB = data.filter((el) => el.id === (this.state.counter + "b"));
      this.setState({
        id: filterDataOpB[0].id, history: filterDataOpB[0].historia, options: {
          a: filterDataOpB[0].opciones.a,
          b: filterDataOpB[0].opciones.b,
        },
        prevSelect: e.target.id,
        prevSelectHistory: [...this.state.prevSelectHistory, this.state.prevSelect],
      });
    } else {
      alert("FIN");
    }
  }

  render() {
    console.log(this.state);

    const { history, options, prevSelect, prevSelectHistory } = this.state;

    return (<div className='layout'>
      <h1 className='historia'>{history}</h1>
      <div className='opciones'>
        <div className='opcion'>
          <button onClick={this.selectOption} id='a' className='botones'>A</button>
          <h2>{options.a}</h2>
        </div>
        <div className='opcion'>
          <button onClick={this.selectOption} id='b' className='botones'>B</button>
          <h2>{options.b}</h2>
        </div>
      </div>
      <div className="recordatorio">
        <h3>Selección anterior: {prevSelect.toUpperCase()}</h3>
        <h4>Historial de opciones elegidas: <ul>{prevSelectHistory.map((el, index) => <li key={index + el}>{el.toUpperCase()}</li>)}</ul></h4>
      </div>
    </div>);
  }
}

export default ShowHistory;