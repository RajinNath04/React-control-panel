// import React, { Component } from 'react';

// import AsyncSelect from 'react-select/async';

// const URL_HOME='http://localhost:3004/Data'

// // type State = {
// //   inputValue: string,
// // };



// export default class InputSelect extends Component {
//   state = { inputValue: '',
//              filter:'' };
//   handleInputChange = (newValue) => {
//     const inputValue = newValue.replace(/\W/g, '');
//     this.setState({ inputValue:inputValue });
//     console.log(this.state.inputValue)
//     return inputValue;
//   };
//   componentDidMount()
//   {
//       fetch(URL_HOME,{method:'GET'})
//       .then(response=>response.json())
//       .then(json=>
//       {
//           this.setState(
//               {
//                 filter:json
//               }
//           )
//           console.log(json)
//       }) 

//   }
//    filterColors  (inputValue) {
//     return this.state.inputValue.filter(i =>
//       Location.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     console.log(inputValue)
//   };

//    loadOptions  (inputValue, callback)  {
//     setTimeout(() => {
//       callback((inputValue)=>this.filterColors(inputValue));
//     }, 1000);
//   };
//   render() {
//     return (
//       <div>
//         <pre>{this.state.inputValue}</pre>
//         <AsyncSelect
//           cacheOptions
//           loadOptions={this.loadOptions}
//           defaultOptions
//           onInputChange={this.handleInputChange}
//         />
//       </div>
//     );
//   }
// }

//with promises
import React, { Component } from 'react';

// import AsyncSelect from 'react-select/async';
import { Select } from 'antd';

import '../../../node_modules/antd/dist/antd.css'
// import { colourOptions } from '../data';
const URL_HOME = 'http://localhost:3004/Data'
const _=require('underscore')

// const colourOptions = [
//   { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
//   { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
//   { value: 'purple', label: 'Purple', color: '#5243AA' },
//   { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
//   { value: 'orange', label: 'Orange', color: '#FF8B00' },
//   { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//   { value: 'green', label: 'Green', color: '#36B37E' },
//   { value: 'forest', label: 'Forest', color: '#00875A' },
//   { value: 'slate', label: 'Slate', color: '#253858' },
//   { value: 'silver', label: 'Silver', color: '#666666' },
// ];

// const LocationOptions = [ 
//   {
//     "SalesID": 783,
//     "AccountingID": 614,
//     "Location": "Rajin",
//     "Poured": 801.15,
//     "Sold": 2674,
//     "Variance": 233.77,
//     "ReportedDate": "2019-06-03",
//     "CreatedAt": "2019-06-05T03:52:36+00:00",
//     "Code": "7c0e4a6a-3535-e0f6-b11c-1e32de5e7544",
//     "Type": "L1 Queue",
//     "CustomerId": 241,
//     "LocationId": 614
// },
// {
//     "SalesID": 783,
//     "AccountingID": 614,
//     "Location": "HOOTERS-HOA-EAST DIV - Fredericksburg",
//     "Poured": 801.15,
//     "Sold": 2674,
//     "Variance": 233.77,
//     "ReportedDate": "2019-06-03",
//     "CreatedAt": "2019-06-05T03:52:36+00:00",
//     "Code": "7c0e4a6a-3535-e0f6-b11c-1e32de5e7544",
//     "Type": "L1 Queue",
//     "CustomerId": 241,
//     "LocationId": 614
// },
// {
//   "SalesID": 783,
//   "AccountingID": 614,
//   "Location": "tanesh",
//   "Poured": 801.15,
//   "Sold": 2674,
//   "Variance": 233.77,
//   "ReportedDate": "2019-06-03",
//   "CreatedAt": "2019-06-05T03:52:36+00:00",
//   "Code": "7c0e4a6a-3535-e0f6-b11c-1e32de5e7544",
//   "Type": "L1 Queue",
//   "CustomerId": 241,
//   "LocationId": 614
// }
// ]

const { Option } = Select;

export default class InputSelect extends Component {
  constructor(props) {
    super(props)
    {
      this.state = {
        filter: [],
        data:[],
        output:''
       
      }
    }

  }

  componentDidMount() {
    fetch(URL_HOME, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        this.setState(
          {
            
filter: _.uniq(json, true, _.iteratee('Location')) ,
            data:json
          }
        ) 
      })


  }
 
  inputValue(e){
    console.log(e)
    this.props.locations(e);
  
  
  }
    

  loadOptions= (List)=>{
    return List.map((item,index )=>{
      return(
        <Option key={index} value={item.Location}>{item.Location}</Option>
     
        )
    })
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
    placeholder="Select"
    optionFilterProp="children"
 
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    } >
    
   {this.loadOptions(this.state.filter)}

  </Select>
      </div>
    );
  }
}

