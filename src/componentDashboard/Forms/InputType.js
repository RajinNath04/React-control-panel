import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';
import { Select } from 'antd';

import '../../../node_modules/antd/dist/antd.css'
// import { colourOptions } from '../data';
const URL_HOME = 'http://localhost:3004/Data'

const { Option } = Select;

export default class InputType extends Component {
  constructor(props) {
    super(props)
    {
      this.state = {
        filter: [],
       
      }
    }

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

  inputValue(e){
    this.props.type(e)
  }


   onSearch = (val)=> {
    console.log('search:', val);
  }
  render() {
   
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
    
    <Option value="L1 Queue">L1 Queue</Option>
    <Option value="L2 Queue">L2 Queue</Option>

  </Select>
      </div>
    );
  }
}
