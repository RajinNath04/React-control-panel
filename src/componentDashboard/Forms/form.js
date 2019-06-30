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
      Location: '',
      Type: '',
      Analysis: ''
    };
  }
  inputLocation(keyword){
  this.setState({
    Location:keyword
  })

}
inputDatePicker(date,dateString){
 
 var newdateString=(dateString.replace("/","-"))
 var newdate=newdateString.replace("/","-");
 console.log(newdate);
 
  this.setState({
    DatePicker:dateString
  })

}
inputType(keyword){
  this.setState({
    Type:keyword
  })
}
inputAnalysis(keyword){
  this.setState({
    Analysis:keyword
  })
}

submit(e){
  e.preventDefault();
  let first=this.state.DatePicker;
  let second=this.state.Location;
  let third=this.state.Type;
  let fourth=this.state.Analysis;

  this.props.INPUTS(first,second,third,fourth);
  

}


  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <br />
            <DatePicker style={{ width: "100%" }} name="DatePicker"  placeholder="Select" format="YYYY/DD/MM" onChange={(date,dateString)=>this.inputDatePicker(date,dateString)}/>
         </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Location</Form.Label>
            <Input  name="location" locations={(keyword)=>this.inputLocation(keyword)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type</Form.Label>
            <InputType  type={(keyword)=>this.inputType(keyword)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Analysis Status</Form.Label>
            <InputAnalysis name="analysis" analysis={(keyword)=>this.inputAnalysis(keyword)}/>
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
