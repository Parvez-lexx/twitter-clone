import React from 'react';
import "./sidebarOption.styles.css"

const SidebarOption = ({active, text, Icon}) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption_active'}`}>
      {/* <Icon /> */}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
