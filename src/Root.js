import React from "react";
import { createStore,applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import reduxPromise from "redux-promise";
import { rootReducer } from "./reducer";
import stateValidator from "./middlewares/stateValidator";
export default ({children,initialState={} })=>{
   return (
       <Provider store={createStore(rootReducer,initialState,applyMiddleware(reduxPromise,stateValidator))} >
           {children}
       </Provider>
   )
}
