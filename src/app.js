import './styles/app.css'

import Header from './components/Header'
import Nav from './components/Nav'
import EmailView from './components/EmailView'

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />

      <EmailView />
    </div>
  )
}

export default App
