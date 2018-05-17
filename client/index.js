/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './react-app/components/Header.jsx'
import Footer from './react-app/components/Footer.jsx'
import ToDoList from './react-app/container/ToDoList.jsx'


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<ToDoList />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));