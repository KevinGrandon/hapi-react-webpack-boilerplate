var React = require('react')
var ReactDOM = require('react-dom')

var styles = require('./css/styles.css');

class App extends React.Component {

  constructor (props) {
    super(props)
	}

  render () {
    return (
      <div className={styles.main}>
        Welcome to App!
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'))
