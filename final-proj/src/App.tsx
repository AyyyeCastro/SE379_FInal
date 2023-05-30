import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import NavigationBar from './components/NavigationBar';
import { Provider } from 'react-redux';
import store from './store/store.ts';

const App: React.FC = () => {
  // THEMES
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" style={{ background: theme.background, color: theme.foreground }}>
      <Provider store={store}>
        <NavigationBar />
        <Outlet />
      </Provider>
    </div>
  );
};

export default App;
