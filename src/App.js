import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (searchtext) => {
    this.setState({ searchfield: searchtext.target.value });
  };

  render() {
    const { monsters, searchfield } = this.state;
    //The above statement is same as
    //const monsters = this.state.monsters &
    // const searchfield = this.state.searchfield
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
