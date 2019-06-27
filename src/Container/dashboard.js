import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./dashboard.css";
import Filterbar from "../componentDashboard/filterbar";
import TableDash from '../componentDashboard/table'
const URL_HOME = 'http://localhost:3004/Data'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      filter: []
    };
  }
  componentDidMount() {
    fetch(URL_HOME, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        this.setState(
          {
            Data: json,
            filter: json
          }
        )
        // console.log(this.state.Filtered)
      })



  }
  // filerOption(type, data) {
  //   let search = this.state.Dataing.filter((item) => {
  //     return item.Location.indexOf(type) > -1 && item.Type.indexOf(data) > -1
  //   })
  //   this.setState({
  //     filtered: search
  //   })

  // }
  btnClicked = (item) => {
    return this.state.Data.map((item) => {
      return (
        <div key={item.LocationID}>
          <div>{item.Location}</div>
        </div>
      )
    })
  }
  render() {
    const { activeIndex } = this.state;
    return (
      <div style={{ marginTop: '90px' }}>
        <Row className="mt-3">
          <Col
            lg={3}
            style={{
              marginLeft: "40px",
              marginBottom: "5px",
              marginTop: "25px"
            }}

          >
            <Filterbar cliked={this.btnClicked} />
          </Col>
          <Col lg={8} style={{ marginTop: "-28px" }}>
            <TableDash tabledata={this.state.filter} />

          </Col>
        </Row>
      </div>
    );
  }
}
export default Dashboard;
