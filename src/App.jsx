import './App.css'
import React, { useState } from 'react';


export default function App() {

  // var [a,b] = [1,10]

  //es6 destructuring 
  let [a, b] = useState(['man court', 'woman court', 'kids court']);
  let [c, d] = useState(['2022-2-3', '2022-2-2', '2022-2-1']);
  let [num, numCh] = useState(0);
  // numCh(10);
  let posts = 'food resturants';

  let sty = { color: 'yellow', fontSize: '30px' };

  function f1() {
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={sty}>Blog</div>
        <button>btn</button>
      </div>
      <div className='list'>
        <h3> {a[0]} <span onClick={() => { numCh(num + 1) }}>💛</span> {num} </h3>
        <p> {c[0]} </p>
        <hr />
      </div>
      <div className='list'>
        <h3> {a[1]}</h3>
        <p> {c[1]} </p>
        <hr />
      </div>
      <div className='list'>
        <h3> {a[2]}</h3>
        <p> {c[2]} </p>
        <hr />
      </div>
    </div>
  )
}
