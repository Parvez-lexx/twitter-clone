import React from 'react';
import "./sidebarOption.styles.css"

const SidebarOption = ({active, text, Icon}) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption_active'}`}>
      <Icon />
      <h5>{text}</h5>
    </div>
  );
}

export default SidebarOption;
