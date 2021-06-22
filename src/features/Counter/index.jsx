import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Name import
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};
function CounterFeature(props) {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrementClick = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDecrementClick = () => {
    const action = decrease();
    dispatch(action);
  };
  return (
    <div>
      Counter {counter}
      <div>
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
