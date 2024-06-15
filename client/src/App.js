
import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import NewsController from './newscontroller.jsx';
import NewsDetails from './newsdetails.component.jsx';
import Footer from './footer.component.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<NewsController/>} />
        <Route path='/details/:id' element={<NewsDetails/>} />
      </Routes >
      <Footer/>
    </div>
  );
}

export default App;
