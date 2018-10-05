import { UPDATE_MESSAGE_LIST, LOAD_MESSAGE_LIST, RESET_MESSAGE_LIST } from '../actions/types';

const INITIAL_STATE = {
  messageList: [],
};

export default function indexReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_MESSAGE_LIST:
      const messages = state.messageList ? [...state.messageList, action.payload] : [action.payload];

      localStorage.setItem('chat', JSON.stringify(messages));

      return { ...state, messageList: messages };
    case LOAD_MESSAGE_LIST:
      return { ...state, messageList: JSON.parse(localStorage.getItem("chat")) };
    case RESET_MESSAGE_LIST:
      return { ...state, messageList: INITIAL_STATE.messageList };
    default:
      return state;
  }
}

