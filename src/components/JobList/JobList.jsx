import './JobList.scss'
import JobPosition from '../JobPosition/JobPosition';
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosition } from '../../store/positions/positionSelectors'
import { addFilters } from '../../store/filters/filtersActions'

function JobList() {
  const dispatch = useDispatch();
  const positions = useSelector(selectAllPosition);
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
