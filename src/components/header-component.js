import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class HeaderComponent extends Component{

    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Ximenes Crossword Helper</a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav>
                    <NavItem eventKey={1} href="/">Search</NavItem>
                    <NavItem eventKey={2} href="/clue">Clue Parser</NavItem>
                    <NavItem eventKey={3} disabled>Coming Soon!</NavItem>
                </Nav>

            </Navbar>
        )
    }

}

export default HeaderComponent;

/*

function handleSelect(selectedKey){
    console.log(selectedKey);
}

const navInstance = (
    <Nav bsStyle="pills" activeKey={1} >
        <NavItem eventKey={1} href="/">Search</NavItem>
        <NavItem eventKey={2} href="/clue">Clue Parser</NavItem>
        <NavItem eventKey={3} disabled>Coming Soon!</NavItem>
    </Nav>
);


const Header = () => (
    <div>
        <PageHeader>Ximenes  <small>Crossword helper</small></PageHeader>
        {navInstance}
    </div>
)*/
