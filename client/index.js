const React = require('react')
const reactDom = require('react-dom')

const App = () => (
  <div>Hey yo</div>
)


reactDom.render(<App />, document.body.querySelector('.app'))

