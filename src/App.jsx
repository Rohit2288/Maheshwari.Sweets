
import styles from'./App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Sweets from './components/Sweets';
import Promotion from './components/Promotion';


function App() {
  
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Sweets></Sweets>
      <Promotion></Promotion>
      <Footer></Footer>  
    </div>
      
    
  )
}

export default App
