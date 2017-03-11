const React = require('react');
const ReactDOM = require('react-dom');

const Header = React.createClass({
    render: function() {
        return (
        <h2 className='Header text-center'>{this.props.message}</h2>
        );
    }
});

module.exports = Header;