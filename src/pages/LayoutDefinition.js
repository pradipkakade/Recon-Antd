import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button,Table, Divider, Tag } from 'antd';
import RecordTokenizer from './RecordTokenizer';
import SourceDefinition from './SourceDefinition';

const columns = [{
    title: 'Section',
    dataIndex: 'Section',
    key: 'Section',
  }, {
    title: 'Formula',
    dataIndex: 'Formula',
    key: 'Formula',
  }];
  
  const data = [{
    key: '1',
    Section: 'Data(*)',
    Formula: 'sum()'
  },];

export default class LayoutDefinition extends Component {

    render() {
        const Option = Select.Option;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        function handleBlur() {
            console.log('blur');
        }

        function handleFocus() {
            console.log('focus');
        }
 
        return (
            <div>
                <Card   title="Character Encoding">
                    <div>
                    Select Character Encoding: <Select
                    showSearch
                    style={{ width: 400 , marginLeft: '8px' }}
                    placeholder="Character Encoding"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="utf8">UTF-8</Option>
                    <Option value="utf16">UTF-16</Option>
                </Select>
                </div>
                 </Card>
                <Card
                    title="File Layout"
                   // style={{ width: 300 }}
                >
                  <div>
                   <Input rows={4} value='Data(*)'/>
                  </div> 
                  <div><br/>
                  <Button style={{float: 'right', background: 'rgb(190, 200, 200)' }}>Apply</Button>  
                  </div>
                </Card>
                <br/>
                <Card
                    title="Section Identification"
                   // style={{ width: 300 }}
                >
                  <div>
                  <Table columns={columns} dataSource={data} />
                  </div>
                </Card>

                <Link to="/SourceDefinition"> 
                <Button  style={{ marginTop:'8px'}}>Back</Button>  
                </Link>
                <Link to="/RecordTokenizer">            
                <Button type='primary' style={{ marginLeft: '8px', marginTop:'8px'}}>Next</Button> 
                </Link>
                <Button type='primary' style={{ marginLeft: '8px', marginTop:'8px'}}>Complete Step</Button>
                </div>

        )
    }
}
