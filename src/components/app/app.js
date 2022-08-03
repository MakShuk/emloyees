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
        { name: 'Maks', salary: 800, increase: false, id: 1 },
        { name: 'Ania', salary: 200, increase: false, id: 2 },
        { name: 'Den', salary: 1800, increase: false, id: 3 },
      ],
    };
    this.maxId = 4;
    this.addItem = this.addItem.bind(this);
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem(name, salary){
       const newItem = {
         name,
         salary,
         increase: false,
         rise: false,
         id: this.maxId++,
       };
       this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
           data: newArr,
         };
       });
  };
  

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm
         onAdd={this.addItem}
        />
      </div>
    );
  }
}

export default App;
