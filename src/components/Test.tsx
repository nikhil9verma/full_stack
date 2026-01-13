import React, { useMemo } from 'react'



const Test = ({num,fun}:{num:any,fun:any}) => {

  const sum=useMemo((  )=>{
    console.log("Calculating sum");
    return num=+10;
  },[num]);

  return (
    <div>
      <h1>
        This is a test component with number: {num}

        <button onClick={fun}> Click me</button>
      </h1>
    </div>
  )
}

export default Test

// 
