import React, { useState, useEffect, useContext } from "react";
import UrlList from "../components/UrlList";
import PresetList from "../components/PresetList";
import Divider from "../components/Divider";
import { useUserData } from "../Provider/UserDataProvider";
import { urlData, presetData } from "../Provider/Interface";

const Presets = () => {
    const { user, presets, getPresets } = useUserData();

    useEffect(() => {
        getPresets();
    });

    return (
        <div className="w-full ">
            <h1 className=" mx-[5vw]">
                THIS IS <br />
                STATE : "PRESETS"
            </h1>
            <Divider text="PRESET" type="left" />
            <PresetList presets={presets} />
        </div>
    );
};

export default Presets;
