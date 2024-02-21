import {DataRepository} from "../datos/dataRepository.ts";
import {Jugador} from "../dominio/jugador.ts";

export class JugadorControlador {
    private repository: DataRepository;

    constructor(url: string) {
        this.repository = new DataRepository(url);
    }

    public mostrarJugadores(): void {
        this.repository.getAll().then((jugadores: Jugador[]) => {
            jugadores.forEach((jugador: Jugador) => {
                const playerInfo = jugador.player;
                const stats = jugador.statistics[0];
                document.querySelector<HTMLDivElement>('#jugadores')!.innerHTML += `
                    <div class="card">
                        <img class="img" src="${playerInfo.photo}" alt="${playerInfo.name}">
                        <span>${playerInfo.name}</span>
                        <p>Edad: ${playerInfo.age}</p>
                        <p>Equipo: ${stats.team.name}</p>
                        <p>Posición: ${stats.games.position}</p>
                        <p>Partidos jugados: ${stats.games.appearences}</p>
                        <p>Goles: ${stats.goals.total}</p>
                    </div>
                `
            });
        }).catch(error => {
            console.error('Error:', error);
        });
    }
}