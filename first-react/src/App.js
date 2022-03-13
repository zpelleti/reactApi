import React from 'react'

import "./App.css";

// components :
import NavBar from "./component/navbar.jsx";
import Titles from "./component/titles.jsx";

class App extends React.Component {

  state = {
    titles: [
      {id: 1, name: "Intro to React", value: 10},
      {id: 2, name: "Intro to HTML", value: 10},
      {id: 3, name: "Intro to Java", value: 10},
      {id: 4, name: "Intro to Js", value: 10},
      {id: 5, name: "Intro to C#", value: 10},
      {id: 6, name: "Intro to OOP", value: 10},

    ],
  };

  constructor(props) {
    super(props);
  }

  handleDelete = (titleId) => {
    const titles = this.state.titles.filter((title) => 
                  title.id !== titleId);

    this.setState({titles: titles});
  }

  handleReset = () => {
    const titles = this.state.titles.map((title) => {
      title.value = 10;
      return title;
    });
    this.setState({titles: titles});
  };

  handleUpdate = (title) => {
    const index = this.state.titles.indexOf(title);
    const titles = [...this.state.titles];
    titles[index].value -= 1;

    this.setState({titles});
    };
/* 
USE OF RENDER:


const App = () => {
  return (
    <div>
      
    </div>
  )
} */
    render(){
     return(
      <div>
        <div className="App">
          <NavBar 
          titles={this.state.titles}/>
          </div>
          <main className="container">
            <Titles
            titles = {this.state.titles}
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
            onReset={this.handleReset}/>
          </main>
        </div>
      );
    }
}
export default App;













