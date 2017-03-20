const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');



ReactDOM.render(
		<App initialData={window.initialData} />,
		document.getElementById('root')
);


/*setTimeout(() => {
	ReactDOM.render(
		<h2>Clear</h2>,
		document.getElementById('root')
	);
}, 5000);*/