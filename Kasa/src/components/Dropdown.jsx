
function Dropdown({ title, children }) {

   return (
        <details className="dropdown">
          <summary>{title}</summary>
          <div className="dropdown-content">
            {children}
          </div>
        </details>
  );
}


export default Dropdown;