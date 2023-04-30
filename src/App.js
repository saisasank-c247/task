import './App.css';
import Users from './pages/Users';
import Calendar from './pages/Calendar';
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom"
import 'antd/dist/reset.css';
import { createContext, useState } from 'react';
import { MyContext } from './MyContext';

function App() {
  const [data, setData] = useState({
    users: [],
    events: []
  });

  return (
    <>
      <MyContext.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>

    </>

  );
}

export default App;
