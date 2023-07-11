import { useState } from "react";
import { BrowserRouter, Route, Routes, Nevigate } from "react-router-dom";

function App() {
  return;
  <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
