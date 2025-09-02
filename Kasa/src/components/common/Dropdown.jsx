import upArrow from '../../assets/up.svg'
function Dropdown({ title, children }) {

   return (
        <details className="dropdown">
          <summary>
            <span>{title}</span>
            <img src={upArrow} alt="Flèche" className="dropdown-arrow" />
          </summary>
          <div className="dropdown-content">
            {children}
          </div>
        </details>
  );
}


export default Dropdown;