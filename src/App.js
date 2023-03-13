
// import {Routes,Route} from 'react-router'
// import Home from './pages/Home/Home'
// import Contact from './pages/contact/Contact';
// import About from './pages/About/About';
import Greetings from './pages/Greetings/greeting'
 function App() {
  return (
    <div className="App">
{/* //       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/Contact' element={<Contact/>}/>
//       </Routes> */}

    <Greetings name= 'hello'/> 
    <Greetings name= 'hi'/>
    <Greetings name= 'hello'/>
 
     {/* // <footer/> */}
     </div>
   );
 }

 export default App;
