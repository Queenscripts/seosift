import React from 'react';
import Signup from './Signup/signup';
import Search from './Search/search';
import Login from './Login/login';
import Privacy from './Privacy/privacy';
import Layout from './Layout/layout';
import Blog from './Blog/blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
   <HashRouter basename='/'>
    <Router>
      <Layout>
      <Switch>
        <Route exact path={["/blog", "/"]}>
          <Blog/>
        </Route>
        <Route exact path="/login">
        <Login />
      </Route>
       
      <Route exact path="/search"> 
        <Search />
      </Route>    
       {/* </Switch> 
     </Layout>
      </Router>  */}
      {/* <Router> */}
        {/* <Layout>
      <Switch> */}
      <Route exact path="/signup">
           <Signup/>
        </Route>
      <Route exact path="/privacy">
        <Privacy />
      </Route>
      </Switch> 
     </Layout>
    </Router>
    </HashRouter>
</>


  );
}

export default App;