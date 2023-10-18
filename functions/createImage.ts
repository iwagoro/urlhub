export const crateRandomImage = async () => {
    const url = "https://source.unsplash.com/random";
    const result = await fetch(url).then((response) => response.url);

    return result;
};
