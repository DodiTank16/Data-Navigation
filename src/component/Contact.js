import { Component } from "react";
import { Link } from "react-router-dom";
import MyHOC from './Hoc'


class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //  data: this.props,
      };
      console.log('Contact',this.props.location.state);
    }
    render() {
      const contactStyle = {
        backgroundImage: `url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")` ,
        height:'90vh',
        width: '213.5vh',
        marginTop:'-26.5px',
        fontSize:'20px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
      const font={
        background: 'radial-gradient(circle, rgba(199,160,99,1) 8%, rgba(19,42,99,1) 18%)'
      }          
      const fontColor = {
        color: '#87ceeb',
        position: 'relative',
        top: '70px',
        left: '46.60%'
      }
      
      // console.log(this.props);
      // console.log(this.state.data);

      // const { query } = this.props;

      return ( 
        <div style={contactStyle}>
                <h1 style={font}>Welcome to Contact Us Page. </h1>
                <h3 style={fontColor}>The data:{this.props.location.state}. </h3>
                <Link className="backBtn" to='/'>Go back</Link>
            </div>
         );
    }
}
 
export default MyHOC(ContactUs);

