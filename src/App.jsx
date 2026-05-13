import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { ThemeProvider } from "./context/ThemeContext";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <ThemeProvider>
    <TaskProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>

      </BrowserRouter>
    </TaskProvider>
    </ThemeProvider>
  );
}

export default App;