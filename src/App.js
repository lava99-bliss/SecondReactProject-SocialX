
import './App.css';

import {Header,Navbar,Features,Download,Subscribe,Faq,Footer} from './components'

function App() {
  return (
    <>
       <header className='header-bg'>
          <Navbar/>
          <Header/>    
          
       </header>
       <Features/>
       <Download/>
       <Subscribe/>
       <Faq/>
       <Footer/>
      
    </>
  );
}

export default App;
