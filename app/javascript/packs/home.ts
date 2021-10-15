import React, { Component } from 'react';
import Webcam from 'react-webcam';

interface Props {}
interface State {}

export default class home extends Component<Props, State> {
  constructor() {
    super();
    this.webcamRef = React.createRef(null);
  }
  componentDidMount = () => {};
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button>ok</button>
        </form>
      </div>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert('test');
  };
}
//<Webcam height={300} ref={this.webcamRef} />
