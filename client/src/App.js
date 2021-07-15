import { Route, Switch } from "react-router-dom"
// import Home from "./screens/Home/Home.jsx"
// import PostCreate from "./screens/PostCreate/PostCreate.jsx"
// import PostDetail from "./screens/PostDetail/PostDetail.jsx"
// import PostEdit from "./screens/PostEdit/PostEdit.jsx"
import Posts from "./screens/Posts/Posts.jsx"
import "./App.css";

function App() {
  return <div className="App">
    <Switch>
      {/* <Route exact path="/" component={Home}/>
      <Route path="/create" component={PostCreate} />
      <Route exact path="/posts/:id" component={PostDetail} />
      <Route exact path="/posts/:id/edit" component={PostEdit} /> */}
      <Route exact path="/posts" component={Posts} />
    </Switch>
  </div>;
}

export default App;
