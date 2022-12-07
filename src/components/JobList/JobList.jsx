import './JobList.scss'
import JobPosition from '../JobPosition/JobPosition';

function JobList() {
  return (
    <ul className='job-list'>
      <JobPosition />
      <JobPosition />
      <JobPosition />
    </ul>
  )
}

export default JobList;
