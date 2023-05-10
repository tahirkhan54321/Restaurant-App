/*
Author - Shilin Li (SL)
Modifying authors - None

A class which renders the Marker
*/

import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

const Marker = () => (
  <div
    style={{
      position: "absolute",
      zIndex: 2,
      color: "#0ea8f0",
      fontSize: "40px",
    }}
  >
    <PersonPinCircleIcon fontSize="40px" />
  </div>
);

export default Marker;
