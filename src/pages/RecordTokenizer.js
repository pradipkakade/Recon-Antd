import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Select, Card, Input, Button, Table, Divider, Tag, Radio } from 'antd';
import PlusIcon from './../components/PlusIcon';
import TrashIcon from './../components/TrashIcon';
import EditIcon from './../components/EditIcon';

const RadioGroup = Radio.Group;

const columns = [{
    title: 'Field Name',
    dataIndex: 'FieldName',
    key: 'FieldName',
}, {
    title: 'Data type',
    dataIndex: 'DataType',
    key: 'DataType',
}, {
    title: 'Type',
    dataIndex: 'Type',
    key: 'Type',
}, {
    title: 'Field Size',
    dataIndex: 'FieldSize',
    key: 'FieldSize',
}, {
    title: 'Encoding type',
    dataIndex: 'EncodingType',
    key: 'EncodingType',
}, {
    title: PlusIcon,
    dataIndex: 'Plus',
    key: 'Plus',
}];

const data = [{
    key: '1',
    FieldName: 'recType',
    DataType: 'String',
    Type: 'Fixed',
    FieldSize: '2',
    EncodingType: 'ASCII',
    Plus: TrashIcon
}, {
    key: '2',
    FieldName: 'FileName',
    DataType: 'String',
    Type: 'Fixed',
    FieldSize: '64',
    EncodingType: 'ASCII',
    Plus: TrashIcon
}];


export default class RecordTokenizer extends Component {

    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

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
                <Card
                    title="Extractor Details"
                >
                    <div>
                        <Select
                            showSearch
                            style={{ width: 1010, marginLeft: '8px' }}
                            placeholder="Record Extractor types"
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="delimited">Delimited record tokenizer</Option>
                            <Option value="fixed">Fixed length record tokenizer</Option>
                        </Select>
                    </div>
                    <br />
                    <div>
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            <Radio value="line" style={{ marginLeft: '8px' }}>Line</Radio>
                            <Radio value="comma" style={{ marginLeft: '8px' }}>Comma</Radio>
                            <Radio value="colon" style={{ marginLeft: '8px' }}>Colon</Radio>
                        </RadioGroup>
                    </div>
                </Card>

                <Card
                    title="Field Tokenization"
                >
                    <div>
                        <Select
                            showSearch
                            style={{ width: 200, marginLeft: '8px' }}
                            placeholder="Section Detail types"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="Header">Header</Option>
                        </Select>

                        <Select
                            showSearch
                            style={{ width: 200, marginLeft: '8px' }}
                            placeholder="Record Tokenizer types"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="delimited">Delimited record tokenizer</Option>
                            <Option value="fixed">Fixed length record tokenizer</Option>
                        </Select>
                    </div>
                    <br />
                    <div>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </Card>

                <Link to="/SourceDefinition">
                    <Button style={{ marginTop: '8px' }}>Back</Button>
                </Link>
                <Link to="/RecordTokenizer">
                    <Button type='primary' style={{ marginLeft: '8px', marginTop: '8px' }}>Next</Button>
                </Link>
                <Button type='primary' style={{ marginLeft: '8px', marginTop: '8px' }}>Complete Step</Button>
            </div>
        )
    }
}
