import React, { Component } from "react";
import {
  Col,
  Row,
} from "react-bootstrap";

//import {Menu,Form,Card,Grid, CardContent} from 'semantic-ui-react'
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./linecleaning.css";
//import FormLine from '../Container/Forms/formline'
import FilterLine from '../componentLinecleaning/filterbarline'
//import Accordion from 'react-responsive-accordion';

// const angleDown = { faAngleDown };
// const angleUp = { faAngleUp };
// const SizeForm = (
//     <Form>
//       <Form.Group grouped>
//         <Form.Checkbox label='Red' name='color' value='red' />
//         <Form.Checkbox label='Orange' name='color' value='orange' />
//         <Form.Checkbox label='Green' name='color' value='green' />
//         <Form.Checkbox label='Blue' name='color' value='blue' />
//       </Form.Group>
//     </Form>
//   )
class LineCleaning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      Toggleicon: "faAngleDown"
    };
  }
  handleClick = () => {
    // const { index } = titleProps
    // const { activeIndex } = this.state
    // const newIndex = activeIndex === index ? -1 : index

    // this.setState({ activeIndex: newIndex })
    if (document.getElementById("mycard")) {
      const id = document.getElementById("mycard");
      id.classList("rotate");
      console.log(id);
    }
  };

  componentDidMount() {
    var rotated = false;

    document.getElementById("cardheader").onclick = function () {
      var div = document.getElementById("buttonRotate"),
        deg = rotated ? 0 : 180;
      div.style.webkitTransform = "rotate(" + deg + "deg)";
      div.style.mozTransform = "rotate(" + deg + "deg)";
      div.style.msTransform = "rotate(" + deg + "deg)";
      div.style.oTransform = "rotate(" + deg + "deg)";
      div.style.transform = "rotate(" + deg + "deg)";
      rotated = !rotated;
    };
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div style={{ marginTop: '90px' }}>
        <Row>
          <Col
            md={3}
            sm={3}
            lg={3}
            style={{
              marginLeft: "40px",
              marginBottom: "5px",
              marginTop: "25px"
            }}
          >

            <FilterLine />
            <Col lg={8}> {/* <Table allTabItems={this.state.filtered} /> */}</Col>
            {/* <Accordion id="accor">
              <Card>
                <Accordion.Toggle
                  as={Button}
                  variant="warning"
                  eventKey="0"
                  style={{ float: "right", marginTop: "-5px" }}
                  show={true}
                >
                  <Card.Header onClick={this.handleClick()} id="cardheader">
                    <div className="downbutton">Search</div>
                    <div className="iconee"><FontAwesomeIcon icon={faAngleDown} id="buttonRotate" /></div>
                  </Card.Header>

                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body><Form /></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion> */}


          </Col>
        </Row>
      </div>
    );
  }
}
export default LineCleaning;
