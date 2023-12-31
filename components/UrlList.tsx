import React, { useState, useEffect } from "react";
import styled from "styled-components";
import createUrlCard from "../functions/createUrlcard";
import { urlData } from "../Provider/Interface";
import { useUserData } from "../Provider/UserDataProvider";

const Container = styled.div`
    width: 100%;
    padding: 0vw 2.5vw;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Card = styled.a`
    width: calc(100% / 9 - 5vw);
    cursor: pointer;
    margin: 10px 2.5vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1770px) {
        width: calc(100% / 5 - 5vw);
        font-size: 2vw;
    }

    @media (max-width: 1200px) {
        width: calc(100% / 4 - 5vw);
        font-size: 2vw;
    }

    @media (max-width: 768px) {
        width: calc(100% / 3 - 5vw);
        font-size: 2vw;
    }

    @media (max-width: 480px) {
        width: calc(100% / 2 - 5vw);
        font-size: 2vw;
    }
`;
const ImageContainer = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid gray;
    border-radius: 10px;

    background-color: black;

    &:hover {
        border: 2px solid white;
    }
`;

const UrlList = ({ urls }: { urls: Array<urlData> }) => {
    const [listsElement, setListsElement] = useState<Array<React.ReactNode>>([]);
    const { user, setUrlToLatest } = useUserData();

    return (
        <Container>
            <>
                {urls.map((url, index) => {
                    <Card key={`url${index}`} target="_blank" href={url.url} onClick={() => setUrlToLatest(url.name)}>
                        <ImageContainer>
                            <img src={url.image} alt={url.name} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
                        </ImageContainer>
                        <h3 className="w-full">{url.name}</h3>
                    </Card>;
                })}
            </>
            <div className="h-[10px] flex-1" />
        </Container>
    );
};

export default UrlList;
