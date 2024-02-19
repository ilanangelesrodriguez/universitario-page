import { MongoClient, Db } from 'mongodb';

export class Conexion {
    private static instance: Conexion;
    private client: MongoClient;
    protected db: Db | null = null;

    private constructor() {
        const uri = 'mongodb+srv://ilanangelesrodriguez:mongodb@cluster01.56hxznf.mongodb.net/?retryWrites=true&w=majority';
        this.client = new MongoClient(uri);
    }

    public static getInstance(): Conexion {
        if (!Conexion.instance) {
            Conexion.instance = new Conexion();
        }
        return Conexion.instance;
    }

    public async connect(): Promise<Db> {
        if (!this.db) {
            await this.client.connect();
            console.log('Conectado a la base de datos');
            this.db = this.client.db('universitario');
        }
        return this.db;
    }
}