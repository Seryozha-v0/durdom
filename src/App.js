import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./components/header/Header";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Offers from "./components/offers/Offers";
import { useState } from "react";

import Admin from "./pages/admin/Admin";
import AdminProjects from "./components/adminProjects/AdminProjects";
import AdminUsers from "./components/adminUsers/AdminUsers";
import AdminComments from "./components/adminComments/AdminComments";
import MyProfile from "./pages/myProfile/MyProfile";
import ProfileLogIn from "./components/profileLogIn/ProfileLogIn";
import ProfileRegistry from "./components/profileRegistry/ProfileRegistry";
import Project from "./pages/project/Project";

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
                <Route path="/admin/" element={<Admin />}>
                    <Route index element={<AdminProjects />}/>
                    <Route path="projects" element={<AdminProjects />} />
                    <Route path="users" element={<AdminUsers />} />
                    <Route path="comments" element={<AdminComments />} />
                    <Route path="tags" element={<p>test</p>} />
                    <Route path="categories" element={<p>test</p>} />
                    <Route path="specs" element={<p>test</p>} />
                </Route>
                <Route path="/profile/" element={<MyProfile />}>
                    <Route index element={<p>test</p>} />
                    <Route path="login" element={<ProfileLogIn />} />
                    <Route path="registry" element={<ProfileRegistry />} />
                </Route>
                <Route path="/projects" element={<p>test</p>} />
                <Route path="/project/:id" element={<Project />} />
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