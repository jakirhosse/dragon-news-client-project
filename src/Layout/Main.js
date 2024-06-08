import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import LiftSide from '../pages/Shared/LiftSide/LiftSide';
import RightSide from '../pages/Shared/RightSide/RightSide';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
        return (
                <div>
                        <Header></Header>
                        <Container>
                        <Row>
                        <Col lg='2' className='d-none d-lg-block'>
                          <LiftSide></LiftSide>
                        </Col>
                        <Col className='lg-7'>
                        <Outlet></Outlet>
                        </Col>
                        <Col className='lg-2'>
                      <RightSide></RightSide>
                        </Col>
                        </Row>
                </Container>
                <Footer></Footer>
                </div>
        );
};
export default Main;