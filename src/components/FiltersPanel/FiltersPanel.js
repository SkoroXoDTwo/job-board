import './FiltersPanel.scss'

function FiltersPanel() {
  return (
    <div className="panel">
      <ul className="panel__list">
        <li className='panel__filter'>
          <p className='panel__filter-name'>CSS</p>
          <button className='panel__remove-btn'></button>
        </li>
      </ul>
      <button className="panel__clear-btn">Clear</button>
    </div>
  );
}

export default FiltersPanel;
