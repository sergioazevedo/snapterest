var React = require('react');
var ReactDOM = require('react-dom');

var listOfItems = <ul className="list-of-items">
                    <li className="item-1">Item 1</li>
                    <li className="item-2">Item 2</li>
                    <li className="item-3">Item 3</li>
                  </ul>;


var ReactClass = React.createClass({
  getInitialState: function(){
    return {
      isHeaderHidden: false
    };
  },

  handleClick: function(){
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    });
  },

  render: function(){
    var title: 'Stateful React Component';
    var headerElement = React.createElement('h1',
      {
        className: 'header',
        key: 'header'
      },
      this.state.title
    ); 

    var buttonElement = React.createElement('button',
      {
        className: 'btn btn-default',
        onClick: this.handleClick,
        key: 'button'
      },
      'Toggle header'
    );

    if (this.state.isHeaderHidden){
      return React.createElement('div',null, [buttonElement]);
    }
    return React.createElement('div', null, [buttonElement, headerElement]);
  }
})

var element = React.createElement(ReactClass)

ReactDOM.render(
  element,
  document.getElementById('react-application')
);