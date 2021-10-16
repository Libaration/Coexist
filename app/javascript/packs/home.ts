import React, { Component } from 'react';

interface Props {}
interface State {}

export default class home extends Component<Props, State> {
  constructor() {
    super();
    this.webcamRef = React.createRef(null);
  }
  componentDidMount = () => {
    const constraints = {
      video: { width: 300 },
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => (this.webcamRef.current.srcObject = stream));
  };
  render() {
    return (
      <div>
        <video ref={this.webcamRef} autoPlay></video>
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
