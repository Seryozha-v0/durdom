import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./components/header/Header";

function App() {
    return (
        <div class="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;