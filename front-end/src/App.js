import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { useSelector, useDispatch } from "react-redux";

//views
import Home from './views/Home'

//components
import Navbar from "./components/nav";

//reducers
// import { testSlice, selectCount } from "./store/reducer/testReducer";

//styles
import './App.scss';

function App() {

  // const [data, setData] = useState(null);
  // const dispatch = useDispatch();

  // const user = useSelector((state) => state.firebase.auth);
  // const count = useSelector(selectCount);
  // console.log(count);
  // useEffect(() => {}, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}


export default App;
