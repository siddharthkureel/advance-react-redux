import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import CommentBox from '../CommentBox';
let wrapped;
//initiates the wrapped variable
beforeEach(()=>{
    wrapped = mount(<Root><CommentBox /></Root>);
})
//unmount or cleanup the componenet
afterEach(()=>{
    wrapped.unmount()
})
//test block
it('has a textarea and button',()=>{
    //expectation of from a component to equal to what to recieve
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})
//to reuse the lines of code
describe('the text area',()=>{
    //reused line of code in before each block
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    })
    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

    it('has form submitted and cleared values', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })

})
