import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Divider from "../components/Divider";
import { useUserData } from "../Provider/UserDataProvider";
import { urlData, presetData } from "../Provider/Interface";
import UrlList from "../components/UrlList";

const PresetInfo = () => {
    const urlParameters = useParams();
    const [urls, setUrls] = useState<Array<urlData>>([]);
    const { user } = useUserData();
    const maxCardAmount = 8;

    useEffect(() => {
        const fetchData = async () => {};
        fetchData();
    }, [urlParameters.name]);

    return (
        <div className="w-full  ">
            <h1 className="mx-[5vw] ">
                THIS IS <br />
                PRESET : "{urlParameters.name}"
            </h1>
            <Divider text="URL" type="left" />
            <UrlList urls={urls} />
        </div>
    );
};

export default PresetInfo;
