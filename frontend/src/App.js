import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Books from "./pages/Books";
import Edit from "./pages/Edit";
import Create from "./pages/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
