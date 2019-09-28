import React,{Component} from 'react'
import BusinessCard from 'BusinessCard'



class Registration extends Component{
   constructor(props) {
       super(props);
       this.state = {
           register: false,
           fname: '',
           lname: '',
           address: '',
           email: '',
           phoneNumber: ""
       }
   }
   submitHandler = (events) => {
       events.preventDefault();
       const { fname, lname, address, email, phoneNumber } = this.state;
       if (fname !== "" || lname !== "" || address !== "" || email !== "" || phoneNumber !== "") {
           this.setState({ register: true })
		alert("Missing Input Field")
       }
		this.setState({ register: false })

   }
   render() {
       if (!this.state.register) {
           return (
               <div >
                   <center>
                       <form>
                           <input placeholder="First Name.." onChange={e => this.setState({ fname: e.target.value })}></input><br /><br />
                           <input placeholder="Last Name.." onChange={e => this.setState({ lname: e.target.value })}></input><br /><br />
                           <input placeholder="Address.." onChange={e => this.setState({ address: e.target.value })}></input><br /><br />
                           <input placeholder="E-mail.." onChange={e => this.setState({ email: e.target.value })}></input><br /><br />
                           <input placeholder="Phone NUmber" onChange={e => this.setState({ phoneNumber: e.target.value })}></input><br /><br />
                           <button onClick={(events) => this.submitHandler(events)} >Submit</button>
                       </form>
                   </center>
               </div>
           )
       } else {
           return (
               <BusinessCard fname={this.state.fname} />
           )
       }
   }
}
export default Registration;
