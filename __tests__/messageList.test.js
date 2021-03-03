import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import MessageList from '../components/messageList'

describe("<MessageList /> rendering ", () => {
    let wrapper,store;
    const initialState = {}
    const mockStore = configureStore()
    const props = {
        messageList:[]
    }    

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = shallow(<MessageList store={store} {...props}/>).dive()
    })

    it("renders correctly with defualt props", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("should render one ul ", () => {
        expect(wrapper.find('ul')).toHaveLength(1);
    })

    it("ul should have className message-list ", () => {
        expect(wrapper.find('ul').hasClass('message-list')).toBe(true);
    })

})

describe('rendering on basis of messageList data', () => {
    let wrapper,store;
    const initialState = {}
    const mockStore = configureStore()
    const props = {
        messageList:[]
    }    

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = shallow(<MessageList store={store} {...props}/>).dive()
    })

    it('no <li> render in case messageList is empty', () => {
        expect(wrapper.props().messageList).toBe(undefined);
        expect(wrapper.find('li')).toHaveLength(0);
    })

    it(' <li> render in case messageList is not empty', () => {
        wrapper.setProps({ messageList: [{ id:'test', message:'message'}]})
        expect(wrapper.find('li').length).toBeGreaterThan(0);
    })

})

