'use client';

import { useState } from 'react';

export default function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>{cuenta}</p>
      
      <button onClick={() => setCuenta(cuenta - 1)} >-</button>

      <button onClick={() => setCuenta(cuenta + 1)}>+</button>
    </div>
  );
}