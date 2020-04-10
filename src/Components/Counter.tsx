import * as React from 'react';
import { increment, decrement } from '../Redux/actions';
import { Store } from "../Types/Redux";
import { connect } from 'react-redux';

interface CounterProps{
  // from parent, they have to send this.
  name:String,
  // from react-redux, ? because parent don't have to send these.
  dispatch?: any,
  count?: Number,
}

const Counter = (props:CounterProps) => {

  // 1. gets props from parent.
  // 2. gets store from redux, overriding props.
  // 3. gets dispatch method from redux in props.

    const increase = () => {
      props.dispatch(increment());
    };

    const decrease = () => {
      props.dispatch(decrement());
    };
  
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={decrease}>-</button>
          <span className="count">{props.count}</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
    );
    
  }
  
// merges + overrides props with redux store. access store properties by props.propertyName
const mapStoreToProps = (reduxStore:Store, props:CounterProps):{} => ({
    ...props,
    count: reduxStore.count,
})

// merges + overrides props with actions. adds action functions.
const mapActionsToProps = {
  increment,
  decrement
};
  
// connect is Higher order function. passes redux store to Counter as props on top of props coming from Counter's Parent component aswell.
export default connect(mapStoreToProps, null)(Counter);