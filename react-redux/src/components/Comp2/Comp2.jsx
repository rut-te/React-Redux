import React from 'react';
import { increment, decrement } from '../../store/store';
import { useDispatch } from 'react-redux';

const Comp2 = () => {
    const dispatch = useDispatch(); 

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment +</button>
            <button onClick={() => dispatch(decrement())}>Decrement -</button>

        </div>
    );
};

export default Comp2;