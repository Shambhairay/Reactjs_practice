// import React from 'react'
// class ClassComponent extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             count:0,
//             name:"shambhavi Ray"

//         }
//     }
//     increment=()=>{
//         this.setState({count:this.state.count +1})
//     }
//     changeName=() =>{
//         this.setState({name:"Shambhavi "})

//     }
//     render(){
//         return(
//             <>
//                 {/* {console.log(this.state)} */}
//                 <h1>THIS IS A CLASS COMPONENT</h1>
//                 <h1>{this.state.count}</h1>
//                 <h1>{this.state.name}</h1>3
//                 <button onClick={this.increment}>Increment</button>
//                 <button onClick={this.changeName}>Change Name</button>
//             </>
//         )
//     }
// }




// export default ClassComponent
import React,{useState} from 'react'

function FunctionComponent(props){
    // console.log(useState("hello")); //["hello,func"]
    const [count,setCount]=useState(10)
    // const [name,setCount]=useState("sham")
    const increment=()=>{
        setCount(count+1)
    

}

  return (
    <div>
    <h1>Function Component</h1>
    <h1>{count}</h1>
    <button onClick={increment}>INC +</button>
    <button onClick={()=> setCount(count -1)}>DEC -</button>
      
    </div>
  )
}

export default FunctionComponent

