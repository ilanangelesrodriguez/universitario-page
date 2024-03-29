import './style.css'
import logo from '/assets/logo.svg'
import banner from '/assets/banner.jpg'
import logoFooter from '/assets/logo_footer.png'
import {JugadorControlador} from "./presentacion/jugadorControlador.ts";

document.addEventListener('DOMContentLoaded', async () => {
    const jugadorControlador = new JugadorControlador('http://localhost:3000/data');

    document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
    <div>
      <div>
          <img src="${logo}" alt="Logo" style="width: 100px;">
          <h1>CLUB UNIVERSITARIO DE DEPORTES</h1>
          <h2>Producto de Base de Datos II</h2>
      </div>

      <img src="${banner}" alt="Banner">
      <h3>Estadísticas del equipo de fútbol</h3>
      
      <input type="text" id="search" class="search" placeholder="Buscar jugador">
      <div id="jugadores"></div>

      <iframe style="background: #EFE7D2;border: none;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-estadisticas_futbol-fnugf/embed/dashboards?id=01b03876-6ec2-4859-83e0-eeb8fb88c81e&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=fixed"></iframe>

      <footer>
          <img src="${logoFooter}" alt="Banner">
          <h2>Club Universitario de Deportes</h2>
          <p>© Desarrollado por <a href="https://pe.linkedin.com/in/ilannestorangelesrodriguez">Ilan Nestor Angeles Rodriguez</a> </p>
      </footer>
    </div>
  `
    jugadorControlador.mostrarJugadores(await jugadorControlador.getAll());

    document.querySelector<HTMLInputElement>('#search')!.addEventListener('input', (event) => {
        const searchTerm = (event.target as HTMLInputElement).value;
        jugadorControlador.buscarJugador(searchTerm);
    });
});
