import React, { useContext, useState } from 'react';

import { StoreContext } from '../../store';

const Vegetables = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [vegetable, setVegetable] = useState('');

  const addVegetable = () => {
    dispatch({ type: 'ADD_VEGETABLE', payload: vegetable });
    setVegetable('');
  }

  const removeVegetable = (vegetable) => {
    dispatch({ type: 'REMOVE_VEGETABLE', payload: vegetable })
  }

  return (
    <React.Fragment>
      <input type="text" value={vegetable} onChange={(e) => setVegetable(e.target.value)}/>
      <button onClick={addVegetable}>Add Vegetable</button>
      <ul>
        {
          state.vegetables.all.map(vegetable => {
            return <li>
              {vegetable}
              <button onClick={() => removeVegetable(vegetable)}>
                Remove
              </button>
            </li>
          })
        }
      </ul>
    </React.Fragment>
  );
};

export default Vegetables;