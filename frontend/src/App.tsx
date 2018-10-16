import * as React from 'react';
import Navbar from './components/shared/Navbar';
import Sidebar from './components/shared/Sidebar';

import "node_modules/@coreui/coreui/dist/css/coreui.min.css"
import "node_modules/simple-line-icons/css/simple-line-icons.css"
import "node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
