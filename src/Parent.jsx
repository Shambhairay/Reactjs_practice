import React from 'react'
import Child from './Child'

const Parent = () => {
  function handleData(data){
    console.log(data);

  }
   

  return (
    <div>
    {/* <Child data={Studentdata}/> */}
    <Child getData={handleData}></Child>
      
    </div>
  )
}

export default Parent
