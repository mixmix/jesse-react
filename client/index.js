var React = require('react')
var reactDom = require('react-dom')

function App () {
  return (
    <div>Hey</div>
  )
}

reactDom.render(<App />, document.body.querySelector('.app'))

