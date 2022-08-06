import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEmloyess: true,
      payIncrease: false,
      oneThousand: false,
    };
  }

  onSelect = (e) => {
    let selectFilter = e.target.getAttribute('description');
    this.setState({
      allEmloyess: false,
      payIncrease: false,
      oneThousand: false,
      [selectFilter]: true,
    });
    this.props.onUpdateFilter(selectFilter);
  }

  render() {
     const on = 'btn-light';
     const off = 'btn-outline-light';
    return (
      <div className="btn-group">
        <button
          type="button"
          className={'btn ' + (this.state.allEmloyess ? on : off)}
          onClick={this.onSelect}
          description="allEmloyess"
        >
          Все сотрудники
        </button>
        <button
          type="button"
          className={'btn ' + (this.state.payIncrease ? on : off)}
          onClick={this.onSelect}
          description="payIncrease"
        >
          На повышение
        </button>
        <button
          type="button"
          className={'btn ' + (this.state.oneThousand ? on : off)}
          onClick={this.onSelect}
          description="oneThousand"
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}
export default AppFilter;
