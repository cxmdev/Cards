import './App.css';
import { Component } from 'react';


class App extends Component {
state = {
  counter: 0, 
  posts: [
    {
      id: 1,
      title : 'Title 1',
      body: 'Body 1'
    },
  
    {
      id: 2,
      title : 'Title 2',
      body: 'Body 2'
    },
  
    {
      id: 3,
      title : 'Title 3',
      body: 'Body 3'
    },
  
  
    ]
  
  };

  timeoutUpdate = null;


  componentDidMount() {
    this.handleTimeout();
 /*   setTimeout(() => {
      this.setState({
})
    }, 2000
  */  
  }

  componentDidUpdate() {
    clearTimeout(this.timeoutUpdate)
     //this.handleTimeout();
  }

  componentWillUnmount (){
    clearTimeout(this.timeoutUpdate)
  }

  handleTimeout = () => {
    const {posts, counter} = this.state;
    posts[0].title = 'the title has ben changed'
    
    
    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts, counter: counter +1})
    }, 500)
  }

  render (){
  const {posts, counter} = this.state;

  return (
    <div className="App">
    <h1>{counter}</h1>
    {posts.map(post => (
      <div key = {post.id}>
      <h1> {post.title}</h1>
       <p> {post.body} </p>
    </div>
    ))}
    </div>
  );
}
}

export default App;


/*{
  id: 1,
  title : 'Title 1',
  body: 'Body 1'
},

{
  id: 2,
  title : 'Title 2',
  body: 'Body 2'
},

{
  id: 3,
  title : 'Title 3',
  body: 'Body 3'
},


]

*/