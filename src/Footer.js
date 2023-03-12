import React from 'react'

import {
    Row,
    Col
} from 'reactstrap'

function Footer() {

  return (
    <>
    <div className='m-auto footer'>
         <Row>
            <Col>
                 <h3>Social</h3>
                    <li><a href='/'><i className="fa fa-facebook"></i> Facebook</a></li>
                    <li><a href='/'><i className="fa fa-linkedin"></i>&nbsp;Linkedin</a></li>
                    <li><a href='/'><i className="fa fa-google"></i>&nbsp;Google +</a></li>
            </Col>
            <Col>
                 <h3>Explore</h3>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>Team</a></li>
                    <li><a href='/'>Clients</a></li>
            </Col>
            <Col>
                 <h3>Contact</h3>
                    <li>Address</li>
                    <li>Display</li>
                    <li>1234567890</li>
            </Col>
            <Col>
                 <h3>Email</h3>
                 <li><a href='/'>mendlesoncommunication@email.com</a></li>
            </Col>
         </Row>
    </div>
    <a href='/' className='m-auto text-decoration-none text-dark'><i className="fa fa-copyright"></i>Copyright 2018 Mendleson Communication Pty Ltd</a>


    <div class="parent-percentage">
       <h1>ABOUT US</h1>
     </div>

     <div className="about-border"><div className='text-line'></div></div>

    </>
  )
}

export default Footer