import React, { Component } from 'react';
import data from "../dataBase/data.json";
import Button from './Button';
import ReminderComponent from './ReminderComponent';
import Swal from 'sweetalert2';
class ShowHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      id: "",
      history: "",
      options: {
        a: "",
        b: "",
      },
      prevSelect: "",
      prevSelectHistory: [],
    };
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
      Swal.fire({
        title: "La aventura llegó a su fin!",
        text: "Gracias por recorrerla!",
        icon: 'warning',
      });
    }
  }

  render() {
    const { history, options, prevSelect, prevSelectHistory } = this.state;

    return (
      <div className='layout'>
        <h1 className='historia'>{history}</h1>
        <div className='opciones'>
          <Button selectOption={this.selectOption} options={options.a} id="a" />
          <Button selectOption={this.selectOption} options={options.b} id="b" />
        </div>
        <ReminderComponent prevSelect={prevSelect} prevSelectHistory={prevSelectHistory} />
      </div>);
  }
}

export default ShowHistory;