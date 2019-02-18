import axios from "axios";
import Modal from "./components/Modal";
import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Helmet } from 'react-helmet'

const TITLE = 'Green Prep'

class MyComponent extends React.PureComponent {
  render () {
    return (
        <>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            ...
        </>
    )
  }
}


class CustomToggle extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      horse: "neigh",
      foodList: [],
      dropdownOpen: false
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/foods/")
      .then(res => {this.setState({ foodList: res.data, horse:"hi" }); 
      console.log(this.state.foodList.get(0).name)})
      .catch(err => console.log(err));
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      
        <DropdownToggle caret color="primary">
          Select Food
        </DropdownToggle>
        <DropdownMenu>
          {this.state.foodList.map((food)=>
            <DropdownItem> {food.name} </DropdownItem>
            )
          }
        </DropdownMenu>
      
      </Dropdown>
    )
  }
}
export default App;