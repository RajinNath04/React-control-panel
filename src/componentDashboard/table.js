import React, { Component } from "react";
import "../../node_modules/antd/dist/antd.css";
import "./table.css";
import { Table, Button, Input, Modal, Drawer,Radio , Popover} from "antd";
//import { array } from "prop-types";
//import { format } from "util";
//import { faBold } from "@fortawesome/free-solid-svg-icons";
//import block from "material-ui/svg-icons/content/block";
// import { Drawer } from "material-ui";

const { TextArea } = Input;
const { Search } = Input
const data = []

class TableDash extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {

        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        row: [],
        sortedInfo: '',
        modalVisible: false,
        selectedData: '',
        value:'',
        subject:'',
        textarea:'',
        random:''
      };
    }

  }
  setModalVisible(modalVisible, data) {

    this.setState({
      modalVisible,
      selectedData: data
    });
  }

  setDrawerVisible = () => {
    this.setState({
      modalVisible: false
    })
  }

  // handleChange = (sorter) => {
  //   console.log('Various parameters', sorter);
  //   this.setState({
  //     sortedInfo: sorter,
  //   });
  // }

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  cleared=()=>
  {
    this.setState({
      subject:'',
      textarea:'',
      value:''
    })

  }
  onHandleChange=(e)=>
  {
    this.setState({
      subject:e.target.value,
    })
    console.log(this.state.subject)
  }

  onHandleChangetext=(e)=>
  {
    this.setState({
      textarea:e.target.value
    })
    console.log(this.state.textarea)
  }
  
  handleClickRandom=()=>
  {
    const min=1000000000000;
    const max=9999999999999;
    const rand=min+ Math.random() * (max-min)
    const rand1=Math.round(rand)
    this.setState({
      random:this.state.random+rand1,
      modalVisible:false
    })
    console.log(this.state.random)
  }



  render() {
    
    let { sortedInfo, loading, selectedRowKeys } = this.state;
   // sortedInfo = sortedInfo || {};
    const columns = [
      {
        title: '',
        dataIndex: '',
        key: '',
        render: () => {
          return (
            <span className="OpenSmartBar">
              <img src="https://datasupport.beerboard.com/images/link.png" alt="OpenSmartBar" style={{ width: '35px' }} />
            </span>
          )
        }
      },
      {
        title: '',
        dataIndex: '',
        key: '',
        render: (data) => {
          return (
            <span className="OpenTicket">
              <img onClick={() => this.setModalVisible(true, data)} src="https://datasupport.beerboard.com/images/ticket.png" alt="OpenTickit" style={{ width: '35px' }} />
            </span>
          )
        }
      },
      {
        title: "Customer Location",
        dataIndex: "Location",
        key: "Location",
        sorter: (a, b) => a.Location.length - b.Location.length,
        sortDirections: ['descend', 'ascend'],
        
       
      },
      {
        title: "Poured",
        dataIndex: "Poured",
        key: "Poured",
        sorter: (a, b) => a.Poured - b.Poured,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: "Sold",
        dataIndex: "Sold",
        key: "Sold",
        sorter: (a, b) => a.Sold - b.Sold,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: "Variance",
        dataIndex: "Variance",
        key: "Variance",
        sorter: (a, b) => a.Variance - b.Variance,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: "Date",
        dataIndex: "ReportedDate",
        key: "ReportedDate",
      },
      {
        title: "Ticket ID",
        dataIndex: "TicketID",
        key: "TicketID",
        render:()=>
        {
          return(
            <span>
              {this.state.random}
            </span>
          )
        }
      },
      {
        title: "Line Cleaning",
        dataIndex: "LineCleaning",
        key: "LineCleaning"
      },
      {
        title:'',
        dataIndex:'',
        key:'',
        render:()=>
        {
          return(
            
           <span  className="analysis" style={{backgroundColor:'#f8962b!important'}}>
          NEED ANALYSIS
           </span>
            
          )
        }
      }
    ];

   
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <Button type="danger" shape="round" onClick={this.start} onChange={this.analysed} disabled>
          NEED ANALYSIS
          </Button>
          <Button type="danger" shape='round' style={{ marginLeft: '10px' }} disabled={!hasSelected}>
             ANALYSED 
          </Button>
          <span style={{ marginLeft: 8 }}> 
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
          <Search placeholder="Search Customer Location" onSearch={value => console.log(value)} enterButton style={{ width: '30%', float: 'right' }} />
        </div>
        
        <Table style={{ height: '50%' }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props.tabledata}
          size='small'
        />
        

        
     
        <Drawer style={{width:"350px"}}
          title="OPEN TICKET DETAILS" 
          placement="right"
          
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
          onClose={this.setDrawerVisible}>
          <p style={{fontWeight:'bold',padding:'10px'}}>CUSTOMER LOCATION</p>
          <p style={{margin:'10px'}}>{this.state.selectedData.Location}</p>
          <table>
            <tr>
              <th style={{padding:'10px'}}>
                POURED
                            </th>
              <th style={{padding:'10px'}}>
                SOLD
                               </th>
              <th style={{padding:'10px'}}>
                VARIANCE
                                 </th>
            </tr>
            <tr>
              <td style={{padding:'10px'}}>
                {this.state.selectedData.Poured}
              </td>
              <td style={{padding:'10px'}}>
                {this.state.selectedData.Sold}
              </td>
              <td style={{padding:'10px'}}>
                {this.state.selectedData.Variance}
              </td>

            </tr>
          </table>
          <br/>
          <Radio.Group onChange={this.onChange}  value={this.state.value} style={{marginLeft:'45px',textAlign:'center'}}>
        <Radio value={1}>L1</Radio>
        <Radio value={2}>L2</Radio>
      </Radio.Group>
         {/* <p style={{marginLeft:'40px'}}>
         L1 <input type="radio" name="gender" value="L1" style={{marginRight:'10px'}}/>
         L2 <input type="radio" name="gender" value="L2"/> 
         </p> */}
         <p style={{marginLeft:'10px'}}>
         <br/>
         Subject
         <br/>
         <Input id="subject" type="text" placeholder="Subject" onChange={this.onHandleChange} value={this.state.subject} style={{marginTop:'5px'}}  required/>
         </p>
         <p style={{marginLeft:'10px'}}>
         Message
         <br/>
         <TextArea rows={8} id="textarea" type="text" onChange={this.onHandleChangetext} value={this.state.textarea} placeholder="Write your description here [max 200 characters]"  required/>
         </p>
         <p style={{textAlign:'center'}}>
         <Button  shape="round" style={{marginRight:'10px'}} type="submit" onClick={this.cleared} className="clear">
          CLEAR
        </Button>
        <Button  shape="round" className="create" onClick={this.handleClickRandom}>
          CREATE
        </Button>
         </p>
        </Drawer>
      </div>
    );
  }
}

export default TableDash;
