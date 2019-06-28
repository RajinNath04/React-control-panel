import React, { Component } from "react";
import "../../node_modules/antd/dist/antd.css";
import { Table, Button,Input,Modal,Drawer } from "antd";
import { array } from "prop-types";
import { format } from "util";
// import { Drawer } from "material-ui";


const { Search } = Input
const data=[]

class TableDash extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        row:[],
        sortedInfo: '',
        visible:false,
        modalVisible: false,
      };
    }
   
  }
  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
}
  
  handleChange = ( sorter) => {
    console.log('Various parameters', sorter);
    this.setState({
      sortedInfo: sorter,
    });
  }

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

  render() {
    console.log(this.props.tabledata)
    let { sortedInfo,loading, selectedRowKeys } = this.state;
    sortedInfo = sortedInfo || {};
     const columns = [
      {
        title: '',
        dataIndex: '',
        key: '',
        render: () => {
            return (
                <span className="OpenSmartBar">
                    <img src="https://datasupport.beerboard.com/images/link.png" alt="OpenSmartBar" style={{width:'35px'}}/>
                </span>
            )
        }
    },
    {
        title: '',
        dataIndex: 'AccountingID',
        key: 'AccountingID',
        render: (AccountingID) => {
            return (
                <span className="OpenTicket">
                    <img onClick={() => this.setModalVisible(true)} src="https://datasupport.beerboard.com/images/ticket.png" alt="OpenTickit"  style={{width:'35px'}}/>
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
        sortOrder: sortedInfo.columnKey === 'Location' && sortedInfo.order,
      },
      {
        title: "Poured",
        dataIndex: "Poured",
        key:"Poured",
        sorter: (a, b) => a.Poured.length - b.Poured.length,
        sortOrder: sortedInfo.columnKey === 'Poured' && sortedInfo.order,
      },
      {
        title: "Sold",
        dataIndex: "Sold",
        key:"Sold"
      },
      {
        title: "Variance",
        dataIndex: "Variance",
        key:"Variance"
      },
      {
        title: "Date",
        dataIndex: "ReportedDate",
        key:"ReportedDate",
       
    
      },
      {
        title: "Ticket ID",
        dataIndex: "TicketID",
        key:"TicketID"
      },
      {
        title: "Line Cleaning",
        dataIndex: "LineCleaning",
        key:"LineCleaning"
      }
    ];

    console.log(data)
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <Button type="submit" onClick={this.start} style={{borderRadius:'80%'}}>
            ANALYSED
          </Button>
          <Button type="submit" style={{marginLeft:'10px',borderRadius:'80%'}}>
           NEED ANALYSIS
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
          <Search placeholder="Search Customer Location" onSearch={value => console.log(value)} enterButton style={{width:'30%',float:'right'}}/>
        </div>
        <Table style={{height:'50%'}}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props.tabledata}
          size='small'
        />
        <Drawer
                        title="OPEN TICKET DETAILS"
                        placement="right"
                      
                        visible={this.state.modalVisible}
                        onOk={() => this.setModalVisible(false)}
                        onCancel={() => this.setModalVisible(false)}
                        onClose={() => this.setModalVisible(false)}>
                        <p>Customer Location</p>
                        <p></p>
                        <p>POURED SOLD </p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Drawer>
      </div>
    );
  }
}

export default TableDash;
