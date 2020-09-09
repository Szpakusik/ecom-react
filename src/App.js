import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductContainer from "./components/ProductContainer/ProductContainer"

import { Provider } from 'react-redux';
import store from "./store/store"

import io from "socket.io-client";
import path from "../src/utils/path"

function App() {
  
  var socket = io.connect(path)

  socket.on("connect", () => {
    alert('Connected to local WebSocket!')
  });
  socket.on("connect_error", data => {
    alert('Connected Error!')
  });
  socket.on("product.decrease", (data) => {
    console.log(data);
  })
  socket.on("product.get.all", (data) => {
    console.log(data);
  })


  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProductContainer socket={socket} />
      </div>
    </Provider>
  );
}

export default App;
