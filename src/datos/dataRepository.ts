import {IDAO} from './IDAO';
import {Jugador} from "../dominio/jugador.ts";

export class DataRepository implements IDAO<Jugador> {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getAll(): Promise<Jugador[]> {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch Error:', error);
            return Promise.reject(error);
        }
    }
}