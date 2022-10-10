import React from 'react';
import logo from '../../photos/logo.png'
import { Container, Row, Col } from 'react-bootstrap';


const Navbar = () => {
  return (
    <div>
      <nav>
        <Container fluid="md">
          <Row className='row'>
            <Col md="2" className='column'>
              <img src={logo} alt='logo'></img>
            </Col>
          </Row>

        </Container>
      </nav>
    </div>
  )
}

export default Navbar