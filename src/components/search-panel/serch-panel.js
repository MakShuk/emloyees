import { Component } from 'react';


import './serch-panel.css';

class SearchPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      tern:""
    }
  }
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
      />
    );
  }
}

export default SearchPanel;