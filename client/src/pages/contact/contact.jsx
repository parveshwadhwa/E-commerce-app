import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button'
import img from '../../assets/prince.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

const Contact = () => {
     return(
         <div>
           <div className="container">
     <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src={img} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>
          <font size="7"><i><b>&nbsp;&nbsp;Prince Wadhwa</b></i></font>
          
          </MDBCardTitle>
        <MDBCardText>
        
                            Having knowledge about C Language concepts and Data Structure and algorithms in c , Object Oriented Programming Language(OOPs) , Full Stack Web Develepment Project (QuickMed.com)
                            Also Have well Composure To Java Language and Having J2SE Project as Well , knowing ruby and php Language As Well For Backend Tasks And As A selt Taught Programmer , I m always ready to learn
                            <br />
                            <br />
                            <br />
                            <b> Contact: </b> <br />
                            Email:-wadhwacorporations51002@gmail.com<br />
                            Contact:- +91 8360515094
                        
        </MDBCardText>
        <Button variant="primary" href='https://github.com/princecoder51002'>Go To My Github Account</Button>
      </MDBCardBody>
    </MDBCard>
    </div>
         </div>
     );
}

export default Contact;