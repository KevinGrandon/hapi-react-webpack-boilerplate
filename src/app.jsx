var React = require('react')
var ReactDOM = require('react-dom')

class App extends React.Component {

  constructor (props) {
    super(props)
	}

  render () {
    return (
      <div>
        Welcome to App!
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'))
