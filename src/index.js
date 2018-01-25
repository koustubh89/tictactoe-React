import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor() {
    this.state = {
      text: undefined
    };
  }
  placemark = () => {
    this.setState = {text: "hi"};
  }
  
  render() {
    return (
      <button className="square" onClick={this.placemark} id={this.props.serial}>
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i, turnsybmol) {
    console.log('block painted', i);
    return <Square serial={i} mark={turnsybmol} />;
  }

  render() {
    var mark = 'X';
    const status = 'Next player: ' + mark;
    console.log('render method board');
    return (
      <div>
        <div className="status">{mark}</div>
        <div className="board-row">
          {this.renderSquare(0, mark)}
          {this.renderSquare(1, mark)}
          {this.renderSquare(2, mark)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, mark)}
          {this.renderSquare(4, mark)}
          {this.renderSquare(5, mark)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, mark)}
          {this.renderSquare(7, mark)}
          {this.renderSquare(8, mark)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    console.log('render method Game');
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
