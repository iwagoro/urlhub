import React, { useState, useEffect, useContext } from "react";
import UrlList from "../components/UrlList";
import PresetList from "../components/PresetList";
import Divider from "../components/Divider";
import { useUserData } from "../Provider/UserDataProvider";
import { urlData, presetData } from "../Provider/Interface";

const Library = () => {
    const { user, urls, getUrls, presets, getPresets } = useUserData();

    useEffect(() => {
        getUrls();
        getPresets();
    });

    return (
        <div className="w-full  ">
            <h1 className="mx-[5vw] ">
                THIS IS <br />
                STATE : "LIBRARY"
            </h1>
            <Divider text="URL" type="right" />
            <UrlList urls={urls} />
            <Divider text="PRESET" type="left" />
            <PresetList presets={presets} />
        </div>
    );
};

export default Library;
