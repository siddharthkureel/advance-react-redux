import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import App from "../components/App";
import Root from "../Root";

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    });
})
afterEach(()=>{
    moxios.uninstall();
})
it('can fetch list of comments',(done)=>{
    //attempt to render the entire
    const wrapped = mount(<Root><App/></Root>)
    //find the 'fetchComments' button and click it 
    wrapped.find('.btn-secondary').simulate('click')
    //expecting to render 500 comments

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });

})