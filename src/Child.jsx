import React from 'react'

const Child = ({getData}) => {
  let Studentdata={
    
    name:"sham",
    RollNo:1234,
    Address:"Patna"

}
const StudentName="shambhavi"
    // let{name,Address,RollNo}=data
    // console.log(props.data);
  return (
    <div>
    {/* <h1>{props.data.name}</h1>
    <h1>{props.data.Address}</h1>
    <h1>{props.data.RollNo}</h1> */}
    {/* <h1>{name}</h1>
    <h2>{Address}</h2>
    <h2>{RollNo}</h2>
    <h2>{children}</h2> */}
    <button onClick={getData}>Click Here</button>
      
    </div>
  )
}

export default Child
