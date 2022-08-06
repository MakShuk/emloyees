import { Component } from 'react';


import './serch-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onUpdateSaerch =(e) => {
    const term = e.target.value;
     this.setState({ term });
     this.props.onUpdateSaerch(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onUpdateSaerch}
      />
    );
  }
}

export default SearchPanel;