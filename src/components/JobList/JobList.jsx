import './JobList.scss'
import JobPosition from '../JobPosition/JobPosition';
import { useSelector } from 'react-redux'
import { selectAllPosition } from '../../store/positions/positionSelectors'

function JobList() {
  const positions = useSelector(selectAllPosition);

  return (
    <ul className='job-list'>
      {positions.map((item) =>
      (<JobPosition
        key={item.id}
        {...item}
      />)
      )}
    </ul>
  )
}

export default JobList;
