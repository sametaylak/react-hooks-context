import React, { useContext, useState } from 'react';

import { StoreContext } from '../../store';

const Fruits = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [fruit, setFruit] = useState('');

  const addFruit = () => {
    dispatch({ type: 'ADD_FRUIT', payload: fruit });
    setFruit('');
  }

  const removeFruit = (fruit) => {
    dispatch({ type: 'REMOVE_FRUIT', payload: fruit })
  }

  return (
    <React.Fragment>
      <input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)}/>
      <button onClick={addFruit}>Add Fruit</button>
      <ul>
        {
          state.fruits.all.map(fruit => {
            return <li>
              {fruit}
              <button onClick={() => removeFruit(fruit)}>
                Remove
              </button>
            </li>
          })
        }
      </ul>
    </React.Fragment>
  );
};

export default Fruits;