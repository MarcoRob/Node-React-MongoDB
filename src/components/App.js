const React = require('react');
const Header = require('./Header');
const axios = require('axios');
const ContestsList= require('./ContestsList');

//import data from '../testData'

const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}

class App extends React.Component {
	state = {
		pageHeader : 'Naming Contests',
		contests : this.props.initialContests
	};

	componentDidMount() {
	}

	componentWillUnMount () {
	}

	fetchContest = (contestId) => {
		pushState ( {currentContestId: contestId} , `/contest/${contestId}`);
	}

	render() {
		return (
			<div className='App'>
                <Header message={this.state.pageHeader} />
                <ContestsList
									onContestClick={this.fetchContest}
									contests={this.state.contests} />
			</div>
		);
	};
}

module.exports = App;
