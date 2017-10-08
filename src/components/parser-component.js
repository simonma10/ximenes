import React, { Component } from 'react';
import { PageHeader, Button, ButtonGroup, Form, FormGroup, Col, FormControl, ControlLabel, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';


class ClueParserComponent extends Component{
    constructor(props){
        super(props);
        this.handleParseClick = this.handleParseClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            clueText: '',
            answerLength:'',
            results:''
        }
    }

    handleParseClick(){
        console.log('clicked');
    };

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.handleParseClick();
    }

    render(){
        return (
            <div>
                <PageHeader>Clue Parser</PageHeader>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>Clue</Col>
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                name="clueText"
                                value={this.state.clueText}
                                placeholder="Enter the clue"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>Answer Length</Col>
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                name="clueText"
                                value={this.state.answerLength}
                                placeholder="Enter the length of the answer"
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>Parse Results</Col>
                        <Col sm={10}>
                            <FormControl
                                componentClass="textarea"
                                name="response"
                                rows="10"
                                value={this.state.results}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <ButtonGroup>
                                <Button onClick={this.handleParseClick} className="btn btn-primary">Parse!</Button>

                            </ButtonGroup>
                        </Col>
                    </FormGroup>
                </Form>
                <Well bsSize="small">Status: {this.props.statusCode}</Well>
            </div>
        )
    }
}

function mapStateToProps(state){
    // whenever application state changes:
    //  - component will auto re-render
    //  - the object in the state function will be assigned as props to the component
    return {
        statusCode: state.response.statusCode,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClueParserComponent);
