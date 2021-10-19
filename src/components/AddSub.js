import React from 'react'
// used to get data from the store of the particular reducer
// useDispatch - used to trigger a specific action on any event
import { useDispatch, useSelector } from 'react-redux';
import { onAdd, onSubtract } from '../actions/index';


export default function AddSub() {
    const currentStateValue = useSelector((state) => state.addOrSubtractNumber)
    const dispatch = useDispatch();
    return (
       <>
        <h1 className="text-center my-3">
          Redux Example
       </h1>
      <div className="text-center my-3">
          <button type="button" className="btn btn-primary" onClick={() => dispatch(onAdd(10))}> + </button>
          <input type="text" value={currentStateValue} className="text-center" readOnly={true}/>
          <button type="button" className="btn btn-primary" onClick={() => dispatch(onSubtract(10))} > - </button>
      </div>
       </>
    )
}
