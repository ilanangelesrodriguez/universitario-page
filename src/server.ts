import express from 'express';
import {MongoClient} from "mongodb";


const app = express();
const uri = 'mongodb://atlas-sql-65c5421121c718493c68aee6-ptu0z.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin';
const client = new MongoClient(uri);

app.get('/data', async (_req, res) => {
    try {
        await client.connect();
        const db = client.db('universitario');
        const data = await db.collection('jugadores').find().toArray();
        console.log("conectado")
        res.json(data);
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        res.status(500).json({ error: 'Error al conectar a la base de datos' });
    }
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));


