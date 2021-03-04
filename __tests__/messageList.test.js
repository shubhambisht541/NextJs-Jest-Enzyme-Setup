import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import MessageList from '../components/messageList'

const initialState = {}
const mockStore = configureStore()
const defaultProps = {
    messageList:[]
} 
let wrapper,store;

beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<MessageList store={store} {...defaultProps} />).dive()
})

describe("<MessageList /> rendering ", () => {

    it("renders correctly with defualt props", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("should render one ul ", () => {
        expect(wrapper.find('ul')).toHaveLength(1);
    })

    it("ul should have className message-list ", () => {
        expect(wrapper.find('ul').hasClass('message-list')).toBe(true);
    })

    it("testing initial messageList props", () => {
        expect(wrapper.instance().props.messageList).toEqual([]);
    })

    it('componentDidUpdate',() => {
        wrapper.instance().scrollToBottom = jest.fn();
        wrapper.setProps({messageList: [{ id:'test1', message:'message1'}]})
        expect(wrapper.instance().scrollToBottom).toHaveBeenCalledTimes(1);
    })

})

describe('rendering on basis of messageList data', () => {   

    it('no <li> render in case messageList is empty', () => {
        expect(wrapper.instance().props.messageList).toEqual([]);
        expect(wrapper.find('li')).toHaveLength(0);
    })

    it(' <li> render in case messageList is not empty', () => {
        wrapper.setProps({ messageList: [{ id:'test', message:'message'}]})
        expect(wrapper.find('li').length).toBeGreaterThan(0);
    })

})



