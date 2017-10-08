import React, { Component } from 'react';
import { PageHeader, Button, ButtonGroup, Form, FormGroup, Col, FormControl, ControlLabel, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { requestData, receiveData } from "../actions/response-actions";
import * as types from '../actions/response-action-types';

import { getUrl, performGetRequest } from '../api/datamuse-api';

class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            input: '',
            letter: '',
            pattern:''
        }
    }

    handleSearchClick(action){
        let url = getUrl(this.state.input, action, this.state.letter, this.state.pattern);
        //this.setState({response: performGetRequest(url)});
        this.props.requestData(this.state.input);
        this.props.performGetRequest(url, types.RECEIVE_DATA );

    };

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
    }

    getLetters(){
        let letters = [' '];
        for (let i = 65; i < 91; i++ ) {
            letters.push(String.fromCharCode(i));
        }
        return _.map(letters, (value) => {
            return (
                <option key={value} value={value}>{value}</option>
            )
        });
    }

    render(){
        let letterOptions = this.getLetters();
        return (
            <div>
                <PageHeader>Search</PageHeader>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>Word</Col>
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                name="input"
                                value={this.state.input}
                                placeholder="Type a word to search for"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>Response</Col>
                        <Col sm={10}>
                            <FormControl
                                componentClass="textarea"
                                name="response"
                                rows="10"
                                value={this.props.wordList}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <ButtonGroup>
                                <Button onClick={() => this.handleSearchClick('similar meaning')} className="btn btn-primary">Thesaurus</Button>
                                <Button onClick={() => this.handleSearchClick('sounds like')} className="btn btn-primary">Homophone</Button>
                                <Button onClick={() => this.handleSearchClick('starts with')} className="btn btn-primary">Starts with</Button>
                                <Button onClick={() => this.handleSearchClick('ends with')} className="btn btn-primary">Ends with</Button>
                                <Button onClick={() => this.handleSearchClick('pattern')} className="btn btn-primary">Pattern</Button>

                                <FormControl componentClass="select" placeholder="select" name="letter" onChange={this.handleChange} style={{width:150 + 'px'}}>
                                    {letterOptions}
                                </FormControl>
                                <FormControl
                                    type="text"
                                    name="pattern"
                                    value={this.state.pattern}
                                    placeholder="Word pattern"
                                    onChange={this.handleChange}
                                />

                            </ButtonGroup>
                        </Col>
                    </FormGroup>
                </Form>
                <Well bsSize="small">Status: {this.props.statusCode} | SearchTerm: {this.state.input} | Selected Letter: {this.state.letter}</Well>
            </div>
        )
    }
}

function mapStateToProps(state){
    // whenever application state changes:
    //  - component will auto re-render
    //  - the object in the state function will be assigned as props to the component
    return {
        responseData: state.response.responseData,
        statusCode: state.response.statusCode,
        wordList: state.response.wordList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        requestData,
        receiveData,
        performGetRequest
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
