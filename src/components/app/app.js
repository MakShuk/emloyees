import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/serch-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employees-list';
import EmployeesAddForm from '../employers-add-form/employees-add-form';

import './app.css';


function App() {

  const data = [
    { name: 'Maks S.', salary: '200', increase: false },
    { name: 'Alex F.', salary: '100', increase: true },
    { name: 'Ana  S.', salary: '50', increase: false },
    { name: 'Omna  k.', salary: '150', increase: true },
  ];


  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList  data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
