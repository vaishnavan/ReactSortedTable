import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userdata:[],
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
    switch(order){
      case 'asc': return this.setState({userdata : this.state.userdata.sort((a,b)=> a.username > b.username ? 1:-1) })

      case 'desc' : return this.setState({userdata : this.state.userdata.sort((a,b) => a.username < b.username ? 1:-1)})
    }
  }
  
  
  render() {
    const {userdata } = this.state; 
    // console.log(userdata)

    return (
      <div>
        <button onClick={()=> this.getData('asc')} >Ascending</button>
        <button onClick={()=> this.getData('desc')} >descending</button>
        <div style={{overflow:"auto",padding:"20px"}}>
        <table>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>website</th>
                  <th>city</th>
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
