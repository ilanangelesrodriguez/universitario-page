import {Collection, Db} from 'mongodb';
import {Conexion} from './conexion';
import {IDAO} from './IDAO';

export class JugadorDAO implements IDAO<any> {
    private db: Promise<Db>;
    private collection: Collection | null = null;

    constructor() {
        this.db = Conexion.getInstance().connect();
    }

    private async init(): Promise<void> {
        const db = await this.db;
        this.collection = db.collection('jugadores');
    }

    public async getAll(): Promise<any[]> {
        if (!this.collection) {
            await this.init();
        }
        if (this.collection) {
            console.log('Obteniendo jugadores');
            const players = await this.collection.find().limit(3).toArray();
            return players.map(player => player.player.name);
        }
        throw new Error('Falló la inicialización de la colección de jugadores');
    }
}