import React, { useState, useEffect } from 'react';

import Ws from '@adonisjs/websocket-client';

export default function Socket() {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const ws = Ws('ws://localhost:3333');

    ws.connect();

    ws.on('open', () => {
      setColor('green');
    });

    ws.on('close', () => {
      setColor('red');
    });
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: '',
        margin: 10
      }}>
      <h4 style={{ marginRight: 6 }}>status</h4>
      <div
        style={{
          height: 10,
          width: 10,
          borderRadius: 75,
          backgroundColor: color
        }}></div>
    </div>
  );
}
