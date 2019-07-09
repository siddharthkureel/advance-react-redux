import React from "react";
import { mount } from "enzyme";
import CommentList from "../CommentList";
import Root from "../../Root";

let wrapped;
beforeEach(()=>{
    let initialState = {
        comment: ['comment 1', 'comment 2']
    };
    wrapped = mount(<Root initialState={initialState} ><CommentList/></Root>)
})
it('has li item',()=>{
    expect(wrapped.find('li').length).toEqual(2);
}) 
it('shows text contains for li item',()=>{
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 2');
})