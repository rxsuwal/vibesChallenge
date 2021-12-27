
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Index from './routes/Index';

import 'bootstrap/dist/css/bootstrap.min.css'
import Article from './routes/Article';
import Register from './routes/Register';



function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact ><Index/></Route>
          <Route path='/register' exact><Register/></Route>
         
          <Route path='/:title' exact ><Article/></Route>
          

         

        </Switch>
    </BrowserRouter>
  );
}

export default App;
