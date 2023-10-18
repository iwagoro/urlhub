import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { presetData } from "../Provider/Interface";
import createPresetCard from "../functions/createPresetCard";
import { useContext } from "react";
import { useUserData } from "../Provider/UserDataProvider";

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 0vw 2.5vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const PresetList = ({ presets }: { presets: Array<presetData> }) => {
    const [presetsElement, setPresetsElement] = useState<Array<React.ReactNode>>([]);
    const { user } = useUserData();

    useEffect(() => {
        const tmp = createPresetCard(user, presets);
        setPresetsElement(tmp);
    }, [presetsElement]);

    return (
        <Container>
            {presetsElement}
            <div className="h-[10px] flex-1" />
        </Container>
    );
};

export default PresetList;
