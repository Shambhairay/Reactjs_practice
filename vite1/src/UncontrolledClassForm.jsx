import React,{Component,createRef} from 'react'
 class UncontrolledClassForm extends Component{
    constructor(){
        super()
        this.userNameRef=createRef()
        this.passwordRef=createRef()

    }
    handleSubmit=(event) =>{
        event.preventDefault();
        let username=this.userNameRef.current.value
        let password=this.passwordRef.current.value
        if(!username || !password){
            alert("provide all the fields")
        }
        else if(username< 8){
            alert("username should be more than 7 chars")
        }
        else{
            console.log("form submitted successfully")
        }
    }
   
    render(){
        return(
            <>
                <div>UncontrolledClassForm</div>
                <form onSubmit={this.handleSubmit}>
                    <label>USERNAME :</label>
                    <input type="text" ref={this.userNameRef}/> <br/>
                    <label>password:</label>
                    <input type="password" ref={this.passwordRef}/> <br/>
                    <button>Login</button>
                </form>
            </>
        )
    }
}

// function UncontrolledClassForm() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default UncontrolledClassForm
