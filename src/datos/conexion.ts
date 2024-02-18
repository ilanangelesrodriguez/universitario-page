import { MongoClient } from 'mongodb';

export class Conexion {
    private uri: string;
    private client: MongoClient;

    constructor(uri: string) {
        this.uri = uri;
        this.client = new MongoClient(this.uri);
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Conexión a MongoDB Atlas exitosa');
        } catch (error) {
            console.error('Error al conectar a MongoDB Atlas:', error);
        }
    }

    getDatabase(databaseName: string) {
        return this.client.db(databaseName);
    }
}