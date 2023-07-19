import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Offers from "./components/offers/Offers";
import { useEffect, useState } from "react";

function App() {
    const [offerOpen, setOfferOpen] = useState(false);
    const handleOpenOpen = () => {
        setOfferOpen(!offerOpen);
    }
    const handleOpenOfferClose = () => {
        setOfferOpen(false);
    }



    return (
        <div class="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>

            <ScrollUp />

            <Offers
                isOpen={offerOpen}
                onOpen={handleOpenOpen}
                onClose={handleOpenOfferClose}
            />
        </div>
    );
}

export default App;