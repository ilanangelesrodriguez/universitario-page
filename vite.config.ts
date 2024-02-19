import { defineConfig } from 'vite';
import { MongoClient } from 'mongodb';
import { IncomingMessage, ServerResponse } from 'http';

export default defineConfig({
    plugins: [
        {
            name: 'my-plugin',
            configureServer(server) {
                const app = server.middlewares;

                app.use(async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
                    if (req.url === '/api/data') {
                        const uri = 'mongodb+srv://ilanangelesrodriguez:mongodb@cluster01.56hxznf.mongodb.net/?retryWrites=true&w=majority';
                        const client = new MongoClient(uri);

                        await client.connect();

                        const collection = client.db('universitario').collection('jugadores');
                        collection.find().toArray().then(data => {
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify(data));
                        }).catch(err => {
                            console.error(err);
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ error: 'Ocurrió un error al intentar obtener datos de MongoDB' }));
                        });
                    } else {
                        next();
                    }
                });
            }
        }
    ],
});