import './JobList.scss'
import JobPosition from '../JobPosition/JobPosition';
import data from '../../datas/data.json'

function JobList() {

  return (
    <ul className='job-list'>
      {data.map((item) =>
        (<JobPosition
          key={item.id}
          {...item}
        />)
      )}
    </ul>
  )
}

export default JobList;
