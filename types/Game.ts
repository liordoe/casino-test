export interface IGame {
    name: string;
    versions: {
        mobile: boolean;
        desktop: boolean;
    },
    provider: string;
    ageRatings: {
        appstore: number;
        googleplay: number;
    },
    description: string;
    picture: string;
    url: string;
    countriesRatings: Map<string, string>;
}
