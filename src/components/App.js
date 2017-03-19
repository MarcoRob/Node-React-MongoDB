const React = require('react');
const Header = require('./Header');
const axios = require('axios');
const ContestsList = require('./ContestsList');
const Contest = require('./Contest');
const api = require('../api');
//import data from '../testData'

const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
}

class App extends React.Component {
	state = {
		contests : this.props.initialContests
	};

	

	componentDidMount() {
	}

	componentWillUnMount () {
	}

	fetchContest = (contestId) => { 
		pushState ( {currentContestId: contestId} , `/contest/${contestId}`);

		api(contestId).then(contest => {
			this.setState({
				currentContestId : contest.id,
				contests : {
					...this.state.contests,
					[contest.id] : contest
				}
			});
		});
	};
	currentContest() {
		return this.state.contests[this.state.currentContestId];
	}

	pageHeader() {
		if(this.state.currentContestId){
			return this.currentContest().contestName;
		}

		return 'Naming Contest';
	}

	currentContent () {
		if(this.state.currentContestId) {
			return (<Contest {...this.currentContest()} />);
		}
	 //else {
		 return (
			<ContestsList
				onContestClick={this.fetchContest}
				contests={this.state.contests} />
			);
		//}
	}


	render() {
		return (
			<div className='App'>
                <Header message={this.pageHeader()} />
                {this.currentContent()}
			</div>
		);
	};
}

module.exports = App;
