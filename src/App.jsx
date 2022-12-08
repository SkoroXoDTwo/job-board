import './App.scss';
import Header from './components/Header/Header';
import FiltersPanel from './components/FiltersPanel/FiltersPanel';
import JobList from './components/JobList/JobList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPositions } from './store/positions/positionActions'
import { selectFilters } from './store/filters/filtersSelectors';
import data from './mock/data.json'

function App() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(addPositions(data));
  });

  return (
    <div className="app">
      <div className='app__container'>
        <Header />
        {
          filters.length > 0 && <FiltersPanel />
        }
        <JobList />
      </div>
    </div>
  );
}

export default App;
