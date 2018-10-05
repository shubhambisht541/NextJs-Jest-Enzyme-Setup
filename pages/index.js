import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateMessageList} from '../actions/'
import MessageList from '../components/messageList'
import '../styles/style.scss'

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    }
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value })
  }

  sendMessage = (event) => {
    event.preventDefault();

    const { message } = this.state;
    const { dispatch } = this.props;

    dispatch(updateMessageList(message));
    this.setState({ message: '' });
  }

  render() {
    const { message } = this.state;

    return (
      <div className="chat">
        <MessageList />
        <form className="message-form" onSubmit={this.sendMessage}>
          <input
            type='text'
            value={message}
            placeholder="Type your message"
            onChange={this.handleMessageChange} />
          <button
            type={'submit'}
            disabled={!message}>Enviar</button>
        </form>
      </div>
    );
  }
}

export default connect()(Index)
