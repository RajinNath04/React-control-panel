import React,{Component} from 'react'

import { Form, Button } from 'react-bootstrap'
// import { DatePicker } from 'react-datepicker'
// import { Grid } from 'react-bootstrap'
import '../../../node_modules/antd/dist/antd.css'
import { DatePicker } from "antd";
import '../Forms/formline.css'
import InputCustomer from '../Forms/InputCustomer' 
import InputLocation from '../Forms/InputLocation'
import InputCreatedby from '../Forms/InputCreatedby'
import RangeSlider from '../Slider'


class FormLine extends Component{

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render(){
  return (
    <div>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>
            Date
          </Form.Label>
          <br/>
            <DatePicker  style={{ width: "100%" }} onChange={this.onChange} placeholder="Select"  format="MM/DD/YYYY"/>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>
            Customer
          </Form.Label>
            <InputCustomer/>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>
            Location
          </Form.Label>
           <InputLocation/>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>
            Product
          </Form.Label>
          <Form.Control type='text'>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <RangeSlider />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>
            Created By
          </Form.Label>
            <InputCreatedby/>
        </Form.Group>
        Line Cleaning Status
        <br />
        <br />

        On
        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round'></span>

        </label>
        Off
        <div id='formbtn'>
          <Button variant='warning' type='reset' className="btn1">
            RESET
          </Button>
          <Button variant='warning' type='button' className="btn1">
            SEARCH
          </Button>
        </div>
      </Form>
    </div>
  )
}
}

export default FormLine
