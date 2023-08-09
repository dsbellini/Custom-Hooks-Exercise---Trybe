import Form from './components/form';
import useToggle from './hooks/useToggle';
import './App.css';

function App() {
  const toggle = useToggle(false);

  return (
    <div className="container">
      {toggle.value ? (
        <Form toggle={toggle.switchToggleValue} />
      ) : (
        <button onClick={toggle.switchToggleValue}>Cadastre-se agora!</button>
      )}
    </div>
  );
}

export default App;
