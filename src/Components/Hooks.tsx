import * as React from 'react';

export interface HooksProps {
    count:Number,
}
 
export interface HooksState {
    count:Number,
}
 
const Hooks = (props:HooksProps) => {

    const [count, setCount] = React.useState(props.count);

    return(
        <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
          <span className="count">{count}</span>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
      </div>
    );
}
 
export default Hooks;