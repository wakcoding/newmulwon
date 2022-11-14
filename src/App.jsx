// import logo from './logo.svg';
import './App.css';
import 'mdb-ui-kit/css/mdb.min.css';

import Header from './components/Header';
import Main from './components/Main';
import Side from './components/Side';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Side/>
      <Footer/>
    </div>
  );
}

export default App;
