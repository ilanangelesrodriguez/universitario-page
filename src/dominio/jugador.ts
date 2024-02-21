export interface Jugador {
    player: {
        name: string;
        age: number;
        photo: string;
    };
    statistics: {
        team: {
            name: string;
        };
        games: {
            position: string;
            appearences: number;
        };
        goals: {
            total: number;
        };
    }[];
}