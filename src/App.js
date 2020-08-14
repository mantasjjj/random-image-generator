import React from 'react';
import PhotoGenerator from './PhotoGenerator';
import Footer from './Footer';

class App extends React.Component {
    render(){
      return(
        <div>
          <PhotoGenerator />
          <Footer />
        </div>
      )
    }
}

export default App;
