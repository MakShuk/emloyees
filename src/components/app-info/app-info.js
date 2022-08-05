import './app-info.css';

const AppInfo = ({ data }) => {
  let counter = data.length;
  let increase = data.filter((item) => item.increase).length;

  

  return (
    <div className="app-info">
      <h1>Учет сотрудников ИП Утконос </h1>
      <h2>Общее число сотрудников: {counter}</h2>
      <h2>Премию получат: {increase}</h2>
    </div>
  );
};

export default AppInfo;
