import { useState } from "react";

function LogementEquipements({ equipments }) {
    const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="details">
        <datails className="dorpdown">
          <summary></summary>
        </datails> 
      </div>
  );
}


export default LogementEquipements;

// utilisation de la balise details et summary pour faire un dropdown