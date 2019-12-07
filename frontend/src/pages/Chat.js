import React, { useState, useEffect } from 'react';
import Ws from '@adonisjs/websocket-client';
import './styles.css';
import Socket from './Socket';

export default function Chat() {
  const [messages, setMessages] = useState([
    { name: 'Walison Matheus', message: 'Vai tomar Agua' }
  ]);
  const [text, setText] = useState('');

  const ws = Ws('ws://localhost:3333');
  useEffect(() => {
    ws.connect();
  });

  const chat = ws.subscribe('chat');
  chat.on('message', data => {
    setMessages([...messages, { name: data.name, message: data.text }]);
  });

  function onsubmit(e) {
    e.preventDefault();

    chat.emit('message', { text, name: 'Walison Matheus' });
  }

  return (
    <div id="content">
      <header>
        <Socket />
      </header>

      <section>
        {messages.map(mensagem => (
          <li>
            <b>{mensagem.name}</b> {mensagem.message}
          </li>
        ))}
      </section>
      <footer>
        <textarea
          placeholder="Digite seu texto aqui"
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={e => setText(e.target.value)}
        />
        <button onClick={onsubmit}>Enviar</button>
      </footer>
    </div>
  );
}
