import { useState } from 'react';

export default function Sidebar(props) {
  const [sidebarShown, setSidebarShown] = useState(false);

  const toggleSidebar = () => {
    setSidebarShown(!sidebarShown);
  }

  return (
    <div className="sidebar">
      <span
        className="sidebar__toggler"
        onClick={toggleSidebar}
      >
        {props.togglerText}
      </span>
      {sidebarShown
        && (
            <div className="sidebar__content">
              {props.children}
            </div>
          )
      }
    </div>
  )
}