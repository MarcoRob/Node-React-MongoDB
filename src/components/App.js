const React = require('react');
const Header = require('./Header');
const ContestPreview = require('./ContestsPreview');
const axios = require('axios');

import data from '../testData'

class App extends React.Component {
	state = {
		pageHeader : 'Naming Contests',
		contests : []
	};

	componentDidMount() { 
		axios.get('/api/contests')
			.then(resp => {
				console.log(resp);
				this.setState({
					contests : resp.data.contests
				})
			})
			.catch(console.error);
		
	}

	componentWillUnMount () {
			
	}
	render() {    
		return (
			<div className='App'>
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest => 
                        <ContestPreview key={contest.id} {...contest} />
                    )}    
                </div>
			</div>
		);
	};
}

module.exports = App;