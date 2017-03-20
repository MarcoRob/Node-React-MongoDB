const React = require('react');
const Header = require('./Header');
const axios = require('axios');
const ContestsList = require('./ContestsList');
const Contest = require('./Contest');
const api = require('../api');
//import data from '../testData'

const pushState = (obj, url) => {
	window.history.pushState(obj, '', url);
};

const onPopState = handler => {
	window.onpopstate = handler;
};

class App extends React.Component {

	static propTypes = {
		initialData : React.PropTypes.object.isRequired
	}
	state = this.props.initialData;
	

	componentDidMount() {
		onPopState((event) => {
			this.setState({
				currentContestId: (event.state || {}).currentContestId
			});
		});
	}

	componentWillUnMount () {
		onPopState(null);
	}

	fetchContest = (contestId) => { 
		pushState ( {currentContestId: contestId} , `/contest/${contestId}`);

		
		api.fetchContest(contestId).then(contest => {
			this.setState({
				currentContestId : contest.id,
				contests : {
					...this.state.contests,
					[contest.id] : contest
				}
			});
		});
	};

	fetchContestList = () => {
		pushState ( {currentContestId: null} , '/');

		api.fetchContestList().then(contests => {
			this.setState({
				currentContestId : null,
				contests 
			});
		});
	};

	fetchNames = (nameIds) => {
		if(nameIds.length === 0) {
			return;
		}
		api.fetchNames(nameIds).then(names => {
			this.setState({
				names
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

	lookupName = (nameId) => {
		if(!this.state.names || !this.state.names[nameId]) {
			return {
				name : '...'
			};
		}
		return this.state.names[nameId];
	}

	currentContent () {
		if(this.state.currentContestId) {
			return (<Contest 
						fetchNames = {this.fetchNames}
						//names = {this.state.names}
						lookupName = {this.lookupName}
						contestListClick={this.fetchContestList} {...this.currentContest()} />);
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
