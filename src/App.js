import './App.css';
import { useSelector } from 'react-redux';
import pageRoutes from './routes/pageRoutes';
import Header from './components/Header';

function App() {
  const { scrutinizedUser } = useSelector(state => state.usersReducer);

  return (
    <div className="App">
      <Header />
      {pageRoutes(scrutinizedUser)}
    </div>
  );
}

export default App;
