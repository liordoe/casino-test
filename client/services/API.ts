import axios from 'axios';

export type GamesGetMethodConfig = object & { [s: string]: string };
export const getGames = async (config: GamesGetMethodConfig): Promise<any> => {
    try {
        const searchParams = new URLSearchParams();
        for (let [key, value] of Object.entries(config)) {
            searchParams.set(key, value);
        }
        const { data } = await axios.get(`/api/games?${searchParams.toString()}`);
        return data;

    } catch (err) {
        console.error(err);
    }
};

export const getMeta = async (): Promise<any> => {
    try {
        const { data } = await axios.get('/api/meta');
        return data;

    } catch (err) {
        console.error(err);
    }
};
