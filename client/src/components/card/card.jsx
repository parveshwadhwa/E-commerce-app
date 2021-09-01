import React from 'react';
import design from '../../assets/design.jpg';
import design2 from '../../assets/design2.jpeg';
import design3 from '../../assets/design3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Design = () => {
    return(
    <div>
           <CardGroup style={{marginBottom: '20px'}}>
  <Card>
    <Card.Img variant="top" src={design} />
    <Card.Body>
      <Card.Title><font size="4"><b>MNC Clothing Private Ltd. Sales Upto 60%</b></font></Card.Title>
      
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={design3} />
    <Card.Body>
      <Card.Title><font size="7"><b>Welcome To My Closet, Stay A While And Shop</b></font></Card.Title>
      
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={design2} />
    <Card.Body>
      <Card.Title><font size="4"><b>Buy Now Or Cry Later</b></font></Card.Title>
     
    </Card.Body>
    
  </Card>
 
</CardGroup>
         </div>
    );
}

export default Design;