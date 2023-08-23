import React, { useState,useEffect } from "react";
import styles from './Counter.module.css'
import './random-stylesheet.css'

function Counter() {
  const [counter, setCounter] = useState(0);
  //render method not required
  //useEffect takes in 2 arguments cb function and dependency
  //no dependency passed  
//   useEffect(() => {
//     //runs on every render
//     setTimeout(() => {
//         setCounter((counter) => counter + 1)
//     },1000)
//     console.log('no depedency passed rendered')
//   })

  //empty dependency array
//   useEffect(() => {
//     //runs only on the first render
//     setTimeout(() => {
//         setCounter((counter) => counter + 1)
//     },1000)
//     console.log('empty dependency array passed rendered')
//   },[])

  //props or state values
  useEffect(() => {
    //runs on first render
    //runs anytime any dependency value changes
    setTimeout(() => {
        setCounter((counter) => counter + 1)
    },1000)
    console.log('state value passed to dependency rendered')
  },[])

  
  return (
    <>
      {/* <button>Click Me</button> */}
      <div className={styles.counter}>Ive been rendered {counter} times</div>
    </>
  );
}

export default Counter;
