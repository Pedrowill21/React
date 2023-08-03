import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpressions';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
     <h1>Fundamentos React</h1>

     <FirstComponent/>
     <TemplateExpression/>

     <Challenge n1="10" n2="23"/>
    </div>
  );
}

export default App;
