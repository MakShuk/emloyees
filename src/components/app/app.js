import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/serch-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employees-list';
import EmployeesAddForm from '../employers-add-form/employees-add-form';

import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList />
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
