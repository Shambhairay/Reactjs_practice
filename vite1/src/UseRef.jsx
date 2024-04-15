import { useRef } from "react";
function useRef(){
    let count=useRef(100)
    console.log(count);
    const handleClick = () =>{
        count.current=count.current +1
        console.log(count);
    
    }
    let usernameRef=useRef()
    let passwordRef=useRef()
    let imageRef=useRef()
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(usernameRef);
        // console.log(passwordRef);
        let username=usernameRef.current.value
        let password=passwordRef.current.value
        if(!username || !password){
            alert("fill all the field")
        }
        else if(username.length < 5){
            alert("provide atleast 5 chars in username")
        }
        else{
            console.log("submitted")
            imageRef.current.src="https://images.pexels.com/photos/17290327/pexels-photo-17290327/free-photo-of-photoshoot-with-joana-slva.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        }
    }
    return(
        <>
        <h1>{count.current}</h1>
        <button onClick={handleClick}>IncreaseCount</button>
        <form onSubmit={this.handleSubmit}>
                    <label>USERNAME :</label>
                    <input type="text" ref={this.userNameRef}/> <br/>
                    <label>password:</label>
                    <input type="password" ref={this.passwordRef}/> <br/>
                    <button>Login</button>
        </form>     
        <img src=""  alt="" ref={imageRef}/>
            
        </>
    )
}

export default UseRef