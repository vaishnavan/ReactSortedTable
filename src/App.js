import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userdata:[],
       show:false,
       updateValue:'waiting...',
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res2) => {
        this.setState({
          userdata:res2.data
        })
    })
  }

  getData = (order) => {
    this.setState({
      show:!this.state.show,
      updateValue:"username"
    })
    switch(order){
      case 'asc': return this.setState({userdata : this.state.userdata.sort((a,b)=> a.username > b.username ? 1:-1)})

      case 'desc' : return this.setState({userdata : this.state.userdata.sort((a,b) => a.username < b.username ? 1:-1)})

      default: return 1;
    }
    
  }
  sortMail = (order) => {
    this.setState({
      show:!this.state.show,
      updateValue:"email"
    })
    switch(order){
      case 'asc': return this.setState({userdata : this.state.userdata.sort((a,b)=> a.email > b.email ? 1:-1)})

      case 'desc' : return this.setState({userdata : this.state.userdata.sort((a,b) => a.email < b.email ? 1:-1)})

      default: return 1;
    }
    
  }

  sortWeb = (order) => {
    this.setState({
      show:!this.state.show,
      updateValue:"Website"
    })
    switch(order){
      case 'asc': return this.setState({userdata : this.state.userdata.sort((a,b)=> a.website > b.website ? 1:-1)})

      case 'desc' : return this.setState({userdata : this.state.userdata.sort((a,b) => a.website < b.website ? 1:-1)})

      default: return 1;
    }
    
  }

  sortCity = (order) => {
    this.setState({
      show:!this.state.show,
      updateValue:"city"
    })
    switch(order){
      case 'asc': return this.setState({userdata : this.state.userdata.sort((a,b)=> a.address.city > b.address.city ? 1:-1)})

      case 'desc' : return this.setState({userdata : this.state.userdata.sort((a,b) => a.address.city < b.address.city ? 1:-1)})

      default: return 1;
    }
    
  }

  
  
  
  render() {
    const {userdata, show, updateValue} = this.state; 
    // console.log(userdata)
    // var storeval;
    // if(show){
    //   storeval = 'asc'
    // }else{
    //   storeval = 'desc'
    // }

    return (
      <div>
        {/* <button onClick={()=> this.getData('asc')} >Ascending</button> */}
        {/* <button onClick={()=> this.getData()} >descending</button> */}
        <h3>*To sorting click on respective table heading to toggle the data Ascending and Descending</h3>
        <p>Note: contact and pincode doesn't having sort functionality</p>
        <h3>Now Sorting the value of <span style={{color:"blue"}}>{updateValue}</span></h3>
        <div style={{overflow:"auto",padding:"20px"}}>
        <table>
              <thead>
                <tr>
                  <th >Sl.No</th>
                  <th onClick={()=> this.getData(show ? 'asc':'desc')}>UserName</th>
                  <th onClick={()=> this.sortMail(show ? 'asc':'desc')}>Email</th>
                  <th onClick={()=> this.sortWeb(show ? 'asc':'desc')}>website</th>
                  <th onClick={()=> this.sortCity(show ? 'asc':'desc')}>city</th>
                  <th>phone number</th>
                  <th>pincode</th>
                </tr>
                </thead>
                <tbody>
                {userdata.map((data,i) => {
                  return(
                    <tr key={data.id}>
                      <td>{i+1}</td>
                      <td>{data.username}</td>
                      <td>{data.email}</td>
                      <td>{data.website}</td>
                      <td>{data.address.city}</td>
                      <td>{data.phone}</td>
                      <td>{data.address.zipcode}</td>
                    </tr>
                  )
                })}
                </tbody>
        </table>
        </div>
      </div>
    )
  }
}

export default App
