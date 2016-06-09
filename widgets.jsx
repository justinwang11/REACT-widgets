var React = require('react');
var ReactDOM = require('react-dom');

var Tabs = require('./tabs.jsx');

var panes = [
  {title: 'one', content: 'First, nigga'},
  {title: 'two', content: 'Second, nigga'},
  {title: 'three', content: 'Third, nigga'}
];

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>
        <Tabs panes={panes} />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
});
