import './App.css';
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav';
import Home from './components/Home.jsx';
import Test1 from './components/test1/Test1.jsx';
import Test2 from './components/test2/Test2.jsx';
import Test3 from './components/test3/Test3.jsx';
import Test4 from './components/test4/Test4.jsx';
import Test5 from './components/test5/Test5.jsx';
import Test6 from './components/test6/Test6.jsx';

function App() {
  return (
    <section className="App">
      <Nav />
       <Routes>
          <Route exact path="/" element={Home()} />
          <Route exact path="/test/1" element={Test1()} />
          <Route exact path="/test/2" element={Test2()} />
          <Route exact path="/test/3" element={Test3()} />
          <Route exact path="/test/4" element={Test4()} />
          <Route exact path="/test/5" element={Test5()} />
          <Route exact path="/test/6" element={Test6()} />
       </Routes>
    </section>
  );
}

export default App;
