import './FiltersPanel.scss'
import { selectFilters } from '../../store/filters/filtersSelectors'
import { removeFilters } from '../../store/filters/filtersActions';
import { useDispatch, useSelector } from 'react-redux'

function FiltersPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  return (
    <div className="panel">
      <ul className="panel__list">
        {
          filters.map((item, index) => (
            <li className='panel__filter' key={index}>
              <p className='panel__filter-name'>{item}</p>
              <button className='panel__remove-btn' onClick={() => dispatch(removeFilters(item))}></button>
            </li>
          ))
        }

      </ul>
      <button className="panel__clear-btn">Clear</button>
    </div>
  );
}

export default FiltersPanel;
