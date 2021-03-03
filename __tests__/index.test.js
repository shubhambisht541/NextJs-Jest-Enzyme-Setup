import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import App from '../pages/index.js'
import MessageList from '../components/messageList'

describe('When the index page is loaded', () => {
	const initialState = {}
	const mockStore = configureStore()
	let wrapper, store;

	beforeEach(() => {
		store = mockStore(initialState)
    wrapper = shallow(<App store={store} />).dive();
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render one <MessageList> component', () => {
    expect(wrapper.find(MessageList)).toHaveLength(1);
  })

  it('Should render one <input> element', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  })

  it('Should render one <button> element', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  })
})


describe('When the input text is empty', () => {
	const initialState = {}
	const mockStore = configureStore()
	let wrapper, store;

	beforeEach(() => {
		store = mockStore(initialState)
    wrapper = shallow(<App store={store} />).dive();
  })

  it('Should <button> element is disabled', () => {
    expect(wrapper.find('input').props().value).toBe("");
    expect(wrapper.find('button').props().disabled).toBe(true);
  })
})


describe('When the input text is filled', () => {
	const initialState = {}
	const mockStore = configureStore()
	let wrapper, store;

	beforeEach(() => {
		store = mockStore(initialState)
    wrapper = shallow(<App store={store} />).dive();
  })

  it('Should <button> element is enabled', () => {
    wrapper.find('input').simulate('change', { target: { value: 'text' }});
    expect(wrapper.find('button').props().disabled).toBe(false);
  })

  it('Should update the state.message', () => {
    wrapper.find('input').simulate('change', { target: { value: 'text' }});
    expect(wrapper.state('message')).toEqual('text');
  })
})
