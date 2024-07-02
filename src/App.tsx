import React from "react";
import { useToggle } from './hooks/CustomHooks';
import './App.css'

function App() {
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
      <div>
          <h1>Toggle Button</h1>
        <button
            className={isSidebarOpen ? 'true' : 'false'}
            onClick={toggleSidebar}>
          {isSidebarOpen ? "True" : "False"}
        </button>
      </div>
  );
}

export default App;
