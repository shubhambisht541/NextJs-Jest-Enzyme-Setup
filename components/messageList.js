import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {loadMessageList} from '../actions/'
import '../styles/style.scss'

class MessageList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(loadMessageList());
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.messageList !== prevProps.messageList) {
      this.scrollToBottom();
    }
  }

  scrollToBottom = () => {
    const list = document.querySelector('.message-list');
    list && list.scrollTo(0, list.scrollHeight);
  }

  render() {
    const { messageList } = this.props;

    return (
      <ul className="message-list">
        {messageList && messageList.map((item, index, array) => <li key={index}>{item}</li>) }
      </ul>
    );
  }
}

MessageList.defaultProps = {
 messageList: []
};

MessageList.propTypes = {
  messageList : PropTypes.array
};

const mapStateToProps = state => ({
  messageList: state.messageList,
});

export default connect(mapStateToProps)(MessageList)
