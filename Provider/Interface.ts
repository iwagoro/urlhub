export type urlData = {
    name: string;
    lowName: string;
    presets: string[];
    image: string;
    url: string;
    date: Date;
};

export type presetData = {
    name: string;
    lowName: string;
    image: string;
    date: Date;
};

export const env = {
    max_card_num: 10,
};
