import React, { useState } from "react";
import styled from "styled-components";
interface MyChipProps {
    flag: boolean;
}

const MyChip = styled.button<MyChipProps>`
    color: ${(props) => (props.flag ? "white" : "gray")};
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    border: ${(props) => (props.flag ? "2px solid white" : "1px solid gray")}};
    background-color: black;
    cursor: pointer;
    
    &:hover {
        border: 2px solid black;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

const Chips = ({ presetName }: { presetName: string[] }) => {
    const tmp: React.ReactNode[] = [];
    const [selected, setSelected] = useState<string[]>([]);
    const [chips, setChips] = useState<React.ReactNode[]>([]);

    const onClick = (name: string) => {
        let strage = JSON.parse(localStorage.getItem("presetName") || "[]");
        if (strage !== null) {
            if (strage.includes(name)) {
                strage = strage.filter((item: string) => item !== name);
            } else {
                strage.push(name);
            }
            localStorage.setItem("presetName", JSON.stringify(strage));
        }
        strage = JSON.parse(localStorage.getItem("presetName") || "[]");
        setSelected(strage);
        console.log(strage);
    };

    return (
        <>
            {presetName.map((name: string, index: number) => {
                return (
                    <MyChip
                        key={index}
                        onClick={() => {
                            onClick(name);
                        }}
                        flag={selected.includes(name)}
                    >
                        <h4>{name}</h4>
                    </MyChip>
                );
            })}
        </>
    );
};

export default Chips;
