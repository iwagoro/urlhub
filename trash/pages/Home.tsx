import React, { useState, useEffect, useContext } from "react";
import UrlList from "../components/UrlList";
import PresetList from "../components/PresetList";
import Divider from "../components/Divider";
import { useUserData } from "../Provider/UserDataProvider";

const Home = () => {
    const { user, urls, getRecentUrls, presets, getRecentPresets } = useUserData();

    useEffect(() => {
        getRecentUrls();
        getRecentPresets();
    });

    return (
        <div className="w-full ">
            <h1 className="mx-[5vw] ">
                WELCOME BACK <br />
                USER : "{user}"
            </h1>
            <Divider text="Recent Url" type="right" />
            <UrlList urls={urls} />
            <Divider text="Recent Presets" type="left" />
            <PresetList presets={presets} />
        </div>
    );
};

export default Home;
