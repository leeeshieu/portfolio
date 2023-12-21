import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ForGoodSpace from './ForGoodSpace';
import Seken from './Seken';
import Main from './Main';

function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                <Route exact path='/' element={< Main />}></Route>
                <Route exact path='/seken' element={< Seken />}></Route>
                <Route exact path='/forgoodspace' element={< ForGoodSpace />}></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;