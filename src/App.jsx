import './App.scss';
import Header from './components/Header/Header';
import JobList from './components/JobList/JobList';

function App() {
  return (
    <div className="app">
      <div className='app__container'>
        <Header />
        <JobList />
      </div>
    </div>
  );
}

export default App;
