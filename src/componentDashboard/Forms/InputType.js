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



   onSearch = (val)=> {
    console.log('search:', val);
  }
  render() {
   
    return (

      <div>
        <Select
    showSearch
    style={{ width: "100%" }}
    placeholder="Select "
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    
    <Option value="L1">L1 Queue</Option>
    <Option value="L2">L2 Queue</Option>

  </Select>
      </div>
    );
  }
}
