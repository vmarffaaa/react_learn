import React from "react";
import { useToggle } from './hooks/CustomHooks';
import './App.css'
import styles from './hooks/Toogler.module.css'

function App() {
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
      <div className={styles.flex}>
          <div className={styles.toogler}>
              <h1>Toggle Button</h1>
            <button
                className={isSidebarOpen ? 'true' : 'false'}
                onClick={toggleSidebar}>
              {isSidebarOpen ? "True" : "False"}
            </button>
          </div>
    </div>
  );
}

export default App;
