import React from 'react';
import Footer from './footer/Footer.jsx'
import Header from './header/Header.jsx'

class App extends React.Component{
  constructor(){
    super();

  }

  render(){
    return (
      <div><Header />
           <Footer />
      </div>
    );
  }
}
export default App;
