import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/serch-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employees-list';
import EmployeesAddForm from '../employers-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Maks', salary: 800, increase: false, like: false, id: 1 },
        { name: 'Ania', salary: 200, increase: true, like: true, id: 2 },
        { name: 'Den', salary: 1800, increase: false, like: false, id: 3 },
      ],
      term: '',
      selectFilter: 'all',
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        } else {
          return item;
        }
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (items.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSaerch = (term) => {
    this.setState({ term });
  };

  filterEmp = (items, selectFilter) => {
    switch (selectFilter) {
      case 'payIncrease':
        return items.filter((item) => {
          return item.like;
        });
      case 'oneThousand':
        return items.filter((item) => {
          return item.salary > 1000
        });
      default:
        return items;
    };
  }

  onUpdateFilter = (selectFilter) => {
    this.setState({ selectFilter });
  };

  render() {
    const { data, term, selectFilter } = this.state;
    const visibleDate = this.searchEmp(data, term);
    const filterDate = this.filterEmp(visibleDate, selectFilter);
    return (
      <div className="app">
        <AppInfo data={data} />
        <div className="search-panel">
          <SearchPanel onUpdateSaerch={this.onUpdateSaerch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} />
        </div>
        <EmployeesList
          data={filterDate}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
