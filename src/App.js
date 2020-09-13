import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductContainer from "./components/ProductContainer/ProductContainer"

import { Provider } from 'react-redux';
import store from "./store/store"

import io from "socket.io-client";
import path from "../src/utils/path"
import Footer from './components/Footer/Footer';

function App() {
  
  var socket = io.connect(path)

  socket.on("connect", () => {
    console.log('Connected to local WebSocket!')
  });
  socket.on("connect_error", data => {
    alert('Connect Error!')
  });
  
  socket.on("product.get.all", (data) => {
    console.log(data);
  })


  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProductContainer socket={socket} />
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
