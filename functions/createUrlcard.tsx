import React from "react";
import { urlData } from "../Provider/Interface";
import styled from "@emotion/styled";

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

const createUrlCard = (user: string, urls: urlData[]) => {
    const tmp: React.ReactNode[] = [];
    urls.map((url, index) => {
        tmp.push(
            <Card key={`url${index}`} target="_blank" href={url.url}>
                <ImageContainer>
                    <img src={url.image} alt={url.name} style={{ aspectRatio: "1/1", objectFit: "cover" }} />
                </ImageContainer>
                <h3 className="w-full">{url.name}</h3>
            </Card>
        );
    });

    return tmp;
};

export default createUrlCard;
