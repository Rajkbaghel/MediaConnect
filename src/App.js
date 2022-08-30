import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage"
import PostView from './components/PostView/PostView';
import PostForm from './components/PostView/PostForm';


function App() {
  return (
    <>
       <BrowserRouter>
         <Switch>
         <Route exact path="/" component={<LandingPage/>}></Route> 
         <Route exact path="/postView" component={<PostView/>}></Route> 
         <Route exact path="/postForm" component={<PostForm/>}></Route> 
         </Switch>
       </BrowserRouter>
    </>
   
  );
}

export default App;
