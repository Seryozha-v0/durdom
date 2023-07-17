import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./components/Header/Header";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Offers from "./components/offers/Offers";

function App() {
    return (
        <div class="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <ScrollUp />
            <Offers />
        </div>
    );
}

export default App;