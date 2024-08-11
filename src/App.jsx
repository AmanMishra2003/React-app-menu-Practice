
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// components
import Menu from './component/menu'
import Header from './component/header'
import Footer from './component/footer'
import Order from './component/order'

// style 
import './App.css'


function App() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour>=12 && currentHour<=22
  return (
    <div className='container'>
      <Header/>
      <Menu isOpen={isOpen}/>
      <Order isOpen={isOpen}/>
      <Footer isOpen={isOpen}/>
    </div>
  )
}

export default App
