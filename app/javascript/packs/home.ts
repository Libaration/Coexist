import React, { Component } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from './constants';
interface Props {}
interface State {}

export default class home extends Component<Props, State> {
  constructor() {
    super();
    this.webcamRef = React.createRef(null);
    this.state = {
      video: '',
      conversation: '',
      name: '',
    };
  }
  handleReceivedConversation = (response) => {
    alert(response);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount = () => {
    const constraints = {
      video: { width: 300 },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      this.setState({ video: stream });
      this.webcamRef.current.srcObject = this.state.video;
    });
  };
  render() {
    return (
      <div>
        <ActionCableConsumer
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        <video ref={this.webcamRef} autoPlay></video>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button>Start</button>
        </form>
      </div>
    );
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(`${API_ROOT}/api/v1/conversations`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        video: this.state.video,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
  };
}
