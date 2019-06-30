import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';
import { Select } from 'antd';

import '../../../node_modules/antd/dist/antd.css'
// import { colourOptions } from '../data';
const URL_HOME = 'http://localhost:3004/Data'

const { Option } = Select;

export default class InputAnalysis extends Component {
  constructor(props) {
    super(props)
    {
      this.state = {
        filter: [],
       
      }
    }

  }

  inputValue(e){
    this.props.analysis(e);
  
  
  }

  componentDidMount() {
    fetch(URL_HOME, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        this.setState(
          {
            filter: json
          }
        )
    })
  }
   onSearch = (val)=> {
    console.log('search:', val);
  }
  render() {
    //const Option=this.Location
   
    return (

      <div>
        <Select  onChange={(e)=>this.inputValue(e)}
    showSearch
    style={{ width: "100%" }}
    placeholder="Select "
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    
    <Option value="analysed">ANALYSED</Option>
    <Option value="need analysis">NEED ANALYSIS</Option>
    <Option value="ticket closed">TICKET CLOSED</Option>
    <Option value="ticket created">TICKET CREATED</Option>

  </Select>
      </div>
    );
  }
}
