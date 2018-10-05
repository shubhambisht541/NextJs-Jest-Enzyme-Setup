import { UPDATE_MESSAGE_LIST, LOAD_MESSAGE_LIST } from './types';

export function updateMessageList(data) {
  return (dispatch, getStore) => {
  	dispatch({
  		type: UPDATE_MESSAGE_LIST,
  		payload: data,
  	});
	};
}

export function loadMessageList() {
  return (dispatch, getStore) => {
  	dispatch({ type: LOAD_MESSAGE_LIST });
	};
}
