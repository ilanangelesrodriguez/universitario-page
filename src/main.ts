import './style.css'
import logo from '/public/assets/logo.svg'
import banner from '/public/assets/banner.jpg'
import logoFooter from '/public/assets/logo_footer.png'

// main.ts
fetch('/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Ahora puedes usar `data` en tu aplicación
    });


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div>
        <img src="${logo}" alt="Logo" style="width: 100px;">
        <h1>CLUB UNIVERSITARIO DE DEPORTES</h1>
        <h2>Producto de Base de Datos II</h2>
    </div>
    
    <img src="${banner}" alt="Banner">
    <h3>Estadísticas del equipo de fútbol</h3>
    <iframe style="background: #F1F5F4;border: none;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"  src="https://charts.mongodb.com/charts-estadisticas_futbol-fnugf/embed/dashboards?id=01b03876-6ec2-4859-83e0-eeb8fb88c81e&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>
    
    <footer>
        <img src="${logoFooter}" alt="Banner">
        <h2>Club Universitario de Deportes</h2>
        <p>© Desarrollado por <a href="https://pe.linkedin.com/in/ilannestorangelesrodriguez">Ilan Nestor Angeles Rodriguez</a> </p>
    </footer>
  </div>
`

