import './JobList.scss'
import JobPosition from '../JobPosition/JobPosition';
import { useSelector, useDispatch } from 'react-redux'
import { selectVisiblePosition } from '../../store/positions/positionSelectors'
import { selectFilters } from '../../store/filters/filtersSelectors'
import { addFilters } from '../../store/filters/filtersActions'

function JobList() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const positions = useSelector((store) => selectVisiblePosition(store, filters));

  const handleAddFilter = (filter) => {
    dispatch(addFilters(filter))
  }

  return (
    <ul className='job-list'>
      {positions.map((item) =>
      (<JobPosition
        key={item.id}
        handleAddFilter={handleAddFilter}
        {...item}
      />)
      )}
    </ul>
  )
}

export default JobList;
