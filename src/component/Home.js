import React from 'react'
import { Link } from 'react-router-dom'
import MyHOC from './Hoc';

class Home extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {  
      const homeStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")` ,
        height:'90vh',
        marginTop:'-26.5px',
        fontSize:'20px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
      const h2font= {
          color: '#FF5733'
      }
      const handleText = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
      //  this.data = this.state;
      // console.log(this.data);

    return (  
      <div style={homeStyle}>  
        <h1><u>This is the Home Page</u></h1>
        <h2 style={h2font}>It is also known as the first page of the website.</h2>
        <input type="text" name="data" className='textBox' onChange={handleText}/>
        <Link className='subBtn' to="/contact" state= {this.state.data} data={this.state.data}>Submit Data to Contact Us Page</Link>
      </div>  
    )  
  }
}  
export default MyHOC(Home)