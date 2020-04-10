import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { reducer } from "../Redux/reducer";

const store = createStore(reducer);

export const App = () => (
<Provider store={store}>
    <Counter name={"ageCounter"}></Counter>
</Provider>
);