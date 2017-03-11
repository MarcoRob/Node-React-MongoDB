const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');
const data = require('./testData');

console.log(data);

ReactDOM.render(
		<App contests={data.contests}/>,
		document.getElementById('root'),
);