import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
//import { DatePicker } from 'react-datepicker'
import '../../../node_modules/antd/dist/antd.css'
import { DatePicker } from "antd";
import Input from "../Forms/Input";
import InputType from "../Forms/InputType";
import InputAnalysis from "../Forms/InputAnalysis";
import "../Forms/form.css";
import { AvBrandingWatermark } from "material-ui/svg-icons";
import Filterbar from "../filterbar";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DatePicker: '',
      location: '',
      type: '',
      analysis: ''
    };
  }
filter(e,keyword){
  this.setState({
    location:keyword
  })

}
submit(e){
  e.preventDefault();
  let first=this.state.location;
  let second=this.state.analysis;
  this.props.INPUTS(first,second);
}


  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <br />
            <DatePicker style={{ width: "100%" }} name="DatePicker"  placeholder="Select" format="MM/DD/YYYY" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Location</Form.Label>
            <Input name="location" locations={(e,keyword)=>this.filter(e,keyword)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type</Form.Label>
            <InputType  />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Analysis Status</Form.Label>
            <InputAnalysis name="analysis" analysis={(e,keyword)=>this.filter(e,keyword)}/>
          </Form.Group>
          <div id="formbtn">
            <Button variant="warning" type="reset" className="btn1">
              RESET
            </Button>
            <Button variant="warning" type="button" className="btn2" onClick={e=>this.submit(e)} >
              SEARCH
            </Button>
          </div>
        </Form>

      </div>
    );
  }
}
export default Forms;
