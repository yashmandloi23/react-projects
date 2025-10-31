import React from "react";

const Navbar = (props) => {
  function change() {
    props.setTheme('dark');
  }
  return (
    <div>
      <button onClick={change}>Theme change</button>
    </div>
  );
};

export default Navbar;
