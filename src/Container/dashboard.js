import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./dashboard.css";
import Filterbar from "../componentDashboard/filterbar";
import TableDash from '../componentDashboard/table'
const URL_HOME = 'http://localhost:3004/Data'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      filtered: ''
    };
  }
  componentDidMount() {
    fetch(URL_HOME, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        this.setState(
          {
            Data: json,
            filtered: ''

          }
        )
        // console.log(this.state.Filtered)
      })



  }
  filerOption(Dat, Loc, typ, ana) {
  
    let search = this.state.Data.filter((item) => {
      // console.log(item.Location,item.Type,item.ReportedDate);
      return item.Location.indexOf(Loc) > -1 && item.Type.indexOf(typ) > -1 && item.ReportedDate.indexOf(Dat) > -1
    })
    // console.log(search);
    this.setState({
      filtered: search
    })
  }

  // btnClicked = (item) => {
  //   return this.state.Data.map((item) => {
  //     return (
  //       <div key={item.LocationID}>
  //         <div>{item.Location}</div>
  //       </div>
  //     )
  //   })
  // }
  render() {
    const { activeIndex } = this.state;
    return (
      <div style={{ marginTop: '90px' }}>
      
        <Row>
          <Col
            sm={3}
            style={{
              marginLeft: "15px", 
              marginBottom: "5px",
              
            }}

          >
            <Filterbar cliked={(Dat, Loc, typ, ana) => this.filerOption(Dat, Loc, typ, ana)} />
          </Col>
          <Col sm={8} style={{ marginTop: "-51px",maxWidth:'70% !important' }}>
            <TableDash tabledata={this.state.filtered} />

          </Col>
        </Row>
        
      </div>
    );
  }
}
export default Dashboard;
