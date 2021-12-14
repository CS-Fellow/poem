/** @format */
import { useState, useEffect } from 'react';

const Comp = () => {
  let [aprilId, setAprilId] = useState(1);

  for (let i = 0; i < 30; i++) {}

  return (
    <div>
      <button onClick={() => setAprilId((aprilId += 1))}>Increment </button>
      {aprilId}
    </div>
  );
};

export default Comp;
