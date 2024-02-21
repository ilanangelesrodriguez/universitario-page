import {DataRepository} from "../datos/dataRepository.ts";
import {Jugador} from "../dominio/jugador.ts";

export class JugadorControlador {
    private repository: DataRepository;

    constructor(url: string) {
        this.repository = new DataRepository(url);
    }

    async getAll(): Promise<Jugador[]> {
        return this.repository.getAll();
    }

    async buscarJugador(nombre: string): Promise<void> {
        const jugadores = await this.getAll();
        const jugadoresFiltrados = jugadores.filter(jugador => jugador.player.name.includes(nombre));
        this.mostrarJugadores(jugadoresFiltrados);
    }

    public mostrarJugadores(jugadores: Jugador[]): void {
        document.querySelector<HTMLDivElement>('#jugadores')!.innerHTML = '';
        jugadores.forEach((jugador: Jugador) => {
            const playerInfo = jugador.player;
            const stats = jugador.statistics[0];
            document.querySelector<HTMLDivElement>('#jugadores')!.innerHTML += `
                <div class="card">
                    <img class="img" src="${playerInfo.photo}" alt="${playerInfo.name}">
                    <span>${playerInfo.name}</span>
                    <p><b>Edad:</b> ${playerInfo.age}</p>
                    <p><b>Equipo:</b> ${stats.team.name}</p>
                    <p><b>Posición:</b> ${stats.games.position}</p>
                    <p><b>Partidos jugados:</b> ${stats.games.appearences}</p>
                    <p><b>Goles:</b> ${stats.goals.total}</p>
                </div>
            `
        });
    }
}