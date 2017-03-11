const React = require('react');
const Header = require('./Header');
const ContestPreview = require('./ContestsPreview');

class App extends React.Component {
	state = {
		pageHeader : 'Naming Contests'
	};

	/*componentDidMount() { 
			
	}

	componentWillUnMount () {
			
	}*/
	render() {    
		return (
			<div className='App'>
                <Header message={this.state.pageHeader} />
                <div>
                    {this.props.contests.map(contest => 
                        <ContestPreview key={contest.id} {...contest} />
                    )}    
                </div>
			</div>
		);
	};
}

module.exports = App;