var React = require('react');
var Button = require('react-bootstrap').Button;
var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const buttonsInstance = (
    <div className="well" style={wellStyles}>
        <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
        <Button bsSize="large" block>Block level button</Button>
    </div>
);

const navbarInstance = (
    <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

var DefaultLayout = React.createClass({
    render: function() {
        return (
            <html>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
            <head><title>{this.props.title}</title></head>
            <body>{this.props.children}
            <br/>{navbarInstance}
            <br/>{buttonsInstance}
            </body>
            </html>
        );
    }
});

module.exports = DefaultLayout;