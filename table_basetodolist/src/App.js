import React,{Component} from 'react';
import "./App.css";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

      user_list:[],
      user_name:'',
      frist_name:'',
      last_name:'',
      sex:'Female'
    }
  }



 
/////me
  submitHandler_me = (event) =>{
    event.preventDefault();
    const {user_list, user_name, frist_name, last_name, sex} = this.state;
    this.setState({
      user_list:[...user_list, {textU:user_name, textF:frist_name, textL:last_name,textS:sex, id:new Date().getTime()}],
      user_name:'',
      frist_name:'',
      last_name:'',
      sex:''
    })
  }
////////////////////////////me

  changeHandler = (event) =>{
    const {name,value} = event.target;
    this.setState({[name]: value});
  }

  // deleteHandler = (id) =>{
  //   return ()=>{
      
  //   }
  // }

  //////////////////////////////me
  deleteHandler_me = id => ()=> {
    const {user_list} = this.state;
    const idx = user_list.findIndex(item=>item.id === id);
    user_list.splice(idx,1);
    this.setState({user_list});
  }
  ////////////////////me


////////////////////me
checkBoxChange_me = (event) =>{
  const {checked} = event.target;
  if (checked) {
    const id = event.target.getAttribute('data-id');
    const {user_list} = this.state; // const toDoList = this.state.toDoList;

    this.setState({
      user_list,
      sex: "Male"
    })
  } else {
    const id = event.target.getAttribute('data-id');
    const {user_list} = this.state; // const toDoList = this.state.toDoList;

    this.setState({
      user_list,
      sex: "Female"
    })
  }
}
//////////////////////////////////////////////me
  render() {
    return (
      <div style={{display: 'flex', alignItems:'center',flexDirection: 'column',width: 400,margin:'auto'}}>
        <h1>Keep List</h1>
        <form style={{display:'flex',width:'100%'}} onSubmit={this.submitHandler_me}>
          <input onChange={this.changeHandler} value={this.state.user_name} type="text" name="user_name" placeholder="Username" className="inputUsername"/>
          {/* me */}
          <input onChange={this.changeHandler} value={this.state.frist_name} type="text" name="frist_name" placeholder="Fristname" className="inputFristname"/>
          <input onChange={this.changeHandler} value={this.state.last_name} type="text" name="last_name" placeholder="Lastname" className="inputLastname"/>
          <input type="checkbox" onChange={this.checkBoxChange_me} />
          {/* me */}
          <button type="submit" disabled={!(this.state.user_name && this.state.frist_name && this.state.last_name)}  className="buttonAdd">Add</button>
        </form>

        <ul className="user-list">
          {this.state.user_list.map(item=><li className="user-item" key={item.id}>
            <span>{item.textU}</span>
            <span>{item.textF}</span>
            <span>{item.textL}</span>

            <span>{item.textS}</span>

            <button onClick={this.deleteHandler_me(item.id)}>X</button>
          </li>)}
        </ul>
        
      </div>
    )
  }
}