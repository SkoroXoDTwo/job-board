import './JobPosition.scss'

function JobPosition({
  id,
  logo,
  company,
  position,
  new: isNew,
  featured,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools
}) {

  const skills = [].concat(role, level, languages, tools);

  return (
    <li className='job-position'>
      <img className='job-position__img' src={logo} />
      <div className='job-position__info-container'>
        <div className='job-position__column'>
          <div className='job-position__row'>
            <h2 className='job-position__company'>{company}</h2>

            {isNew &&
              <span className="job-position__badge">
                new!
              </span>
            }
            {
              featured &&
              <span className="job-position__badge job-position__badge_black">
                featured
              </span>
            }
          </div>
          <div className='job-position__row'>
            <h3 className='job-position__title'>{position}</h3>
          </div>
          <div className='job-position__row'>
            <p className='job-position__info-text'>
              {postedAt}
            </p>
            <span className='job-position__dot'></span>
            <p className='job-position__info-text'>
              {contract}
            </p>
            <span className='job-position__dot'></span>
            <p className='job-position__info-text'>
              {location}
            </p>
          </div>
        </div>

        <div className='job-position__row'>
          {skills.map((item, index) => (
            <span className="job-position__skill" key={index}>
              {item}
            </span>
          ))}

        </div>
      </div>
    </li>
  )
}

export default JobPosition;
