
import './App.css';

//components
import Header from './components/header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
        <Header />
        <TodoForm />
        <Todos />
    </div>
  );
}

export default App;
