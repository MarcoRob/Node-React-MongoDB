const React = require('react');
//import React, { Component } from 'react';

class ContestPreview extends React.Component {
    handleClick = () => {
      this.props.onClick(this.props.id);
        console.log(this.props.contestName);
    };

    render () {
        return (
            <div className='link ContestPreview' onClick={this.handleClick} >
                <div className='category-name'>
                    {this.props.categoryName}
                </div>
                <div className='contest-name'>
                    {this.props.contestName}
                </div>
            </div>
        );
    }
}

ContestPreview.propTypes = {
    id: React.PropTypes.number.isRequired,
    categoryName: React.PropTypes.string.isRequired,
    contestName: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
};

/*const ContestPreview = (contests) => (
    <div className='ContestPreview' onClick={} >
        <div className='category-name'>
            {contests.categoryName}
        </div>
        <div className='contest-name'>
            {contests.contestName}
        </div>
    </div>
);*/

module.exports = ContestPreview;
