const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');



ReactDOM.render(
		<App initialContests={window.initialData.contests} />,
		document.getElementById('root')
);
