import express from 'express';
import {MongoClient} from "mongodb";

const app = express();
const uri = 'mongodb+srv://ilanangelesrodriguez:mongodb@cluster01.56hxznf.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

// Conectar a MongoDB al inicio de la aplicación
client.connect()
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(error => {
        console.error('Error al conectar a MongoDB Atlas:', error);
        // Detener la aplicación si la conexión falla
        process.exit(1);
    });

app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal!');
});

app.get('/data', async (_req, res, next) => {
    try {
        const db = client.db('universitario');
        const data = await db.collection('jugadores').find().toArray();
        res.json(data);
    } catch (error) {
        // Pasar el error al middleware de manejo de errores
        next(error);
    }
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
});

const server = app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

// Cerrar la conexión a MongoDB cuando la aplicación se cierra
process.on('SIGINT', () => {
    client.close()
        .then(() => {
            console.log('Conexión a MongoDB cerrada');
            server.close(() => {
                console.log('Servidor cerrado');
                process.exit(0);
            });
        });
});