// @flow

import React from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import dragonsTooth from './static/dragons_tooth.jpg';
import vtLogo from './static/virginia_tech_football.png';
import '../css/home.css';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col>
            <Image style={{ width: '100%' }} src={dragonsTooth} responsive />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
