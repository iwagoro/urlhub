import React, { useState, useEffect, useContext } from "react";
import Divider from "../components/Divider";
import { useUserData } from "../Provider/UserDataProvider";
import { CSSObject } from "styled-components";
import { useForm } from "react-hook-form";
import styled from "styled-components";
interface SearchProps {
    style?: CSSObject;
}

const ImageContainer = styled.div`
    width: 35vw;
    max-width: 600px;
    aspect-ratio: 1/1;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid white;
    border-radius: 10px;

    background-color: black;
`;

const Search = styled.input<SearchProps>`
    width: 90%;
    color: white;
    background: transparent;
    border-bottom: 2px solid gray;
    outline: none;
    ${(props) => props.style || ""}
`;

const Add = ({ type }: { type: string }) => {
    const { image, generateImage, addUrls, addPresets } = useUserData();
    const { register, getValues, setValue } = useForm();

    useEffect(() => {
        generateImage();
    }, []);

    const onClick = () => {
        const name = getValues("title");
        const url = getValues("url");

        if (type === "url") {
            addUrls(name, url, image);
        } else if (type === "preset") {
            addPresets(name, image);
        }

        setValue("title", "");
        setValue("url", "");
    };

    return (
        <div className="w-full ">
            <h1 className="mx-[5vw] ">
                THIS IS <br />
                STATE : "ADD {type.toUpperCase()}"
            </h1>
            <Divider text="" type="none" />
            <div className="w-full h-full  px-[5vw] my-[30px] flex items-center">
                <ImageContainer>
                    <img src={image} style={{ width: "35vw", aspectRatio: "1/1", borderRadius: "10px", objectFit: "cover", maxWidth: "600px" }} />
                </ImageContainer>
                <div className="h-[25vw] flex flex-col justify-between items-center flex-1">
                    {type === "url" ? (
                        <>
                            <Search placeholder="Title" style={{ fontSize: "clamp(10px,4vw,35px)" }} {...register("title")} />
                            <Search placeholder="URL" style={{ fontSize: "clamp(10px,2vw,20px)" }} {...register("url")} />
                        </>
                    ) : (
                        <>
                            <Search placeholder="PRESET NAME" style={{ fontSize: "clamp(10px,4vw,35px)" }} {...register("title")} />
                        </>
                    )}
                </div>
            </div>
            <Divider text="" type="none" />
            <div className="w-full  px-[5vw] my-[30px] flex items-center justify-center">
                <button className="w-full border border-white text-white px-5 py-2 rounded-[10px]" onClick={onClick}>
                    ADD
                </button>
            </div>
        </div>
    );
};

export default Add;
