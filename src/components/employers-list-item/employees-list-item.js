import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    like,
    onUpdateSalary,
  } = props;

// const onUpdateFilterEl = (e) => {
//   console.log(e.target.value);
//   console.log();
//  }
  
  return (
    <li
      className={
        'list-group-item d-flex justify-content-between' +
        ((increase ? ' increase ' : '') + (like ? ' like ' : ''))
      }
    >
      <span
        className={'list-group-item-label like'}
        onClick={onToggleProp}
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + ' $'}
        onChange={onUpdateSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          data-toggle="increase"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
