import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';
import { Select } from 'antd';

import '../../../node_modules/antd/dist/antd.css'
// import { colourOptions } from '../data';
const URL_HOME = 'http://localhost:3004/Data'

const { Option } = Select;

export default class InputLocation extends Component {
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

//   loadOptions= (List)=>{
//     return List.map((item,index )=>{
//       return(
//         <Option key={index} value={item.LocationId}>L1 Queue</Option>
//       )
//     })
//   }

   onSearch = (val)=> {
    console.log('search:', val);
  }
  render() {
    //const Option=this.Location
   
    return (

      <div>
        <Select
    showSearch
    style={{ width: "100%" }}
    placeholder="Select "
    optionFilterProp="children"
    // onChange={onChange}
    // onFocus={onFocus}
    // onBlur={onBlur}
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    
    <Option value="analysed"></Option>
    

  </Select>
        {/* <AsyncSelect cacheOptions defaultOptions loadOptions={this.LocationOptions} /> */}
      </div>
    );
  }
}
