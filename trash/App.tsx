import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Base from "./base/Base";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Presets from "./pages/Presets";
import PresetInfo from "./pages/PresetInfo";
import { UserDataProvider } from "./Provider/UserDataProvider";
import Divider from "./components/Divider";
import MySpeedDial from "./components/SpeedDial";
import MyModal from "./components/Modal";
import Add from "./pages/Add";
function App() {
    const [modal, setModal] = useState<boolean>(false); // [TODO
    return (
        <div id="base" className="w-screen ">
            <UserDataProvider>
                <Base />
                <Divider text="" type="none" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/presets" element={<Presets />} />

                    <Route path="/library" element={<Library />} />
                    <Route path="/presets/:name" element={<PresetInfo />} />
                    <Route path="/add/url" element={<Add type="url" />} />
                    <Route path="/add/preset" element={<Add type="preset" />} />
                </Routes>
                <MySpeedDial />
                <MyModal toggle={modal} />
            </UserDataProvider>
        </div>
    );
}

export default App;
