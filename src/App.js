
import style from './App.module.css';
import { Calculator } from './components';
function App() {
  return (
   
   
    <div className={style.App}>
      <div className={style.container}>
      <h1>Calculator App</h1>
     <Calculator/>
     </div>
    </div>
    
  );
}

export default App;
