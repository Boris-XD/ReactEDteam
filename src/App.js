import "./styles/styles.scss";
import Curso from "./Curso";

const App = ()=>(
  <>
    <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dBcp1fg2jNxu7nPn6g1CfwHaEK%26pid%3DApi&f=1" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Mi Curso de EDTEAM</p>
          <p>Debemos terminar el Curso OGT</p>
          <a href="ed.team" className="button">Siguiente Leccion</a>
        </div>
      </div>
    </div>
  </div>
  
  <div className="ed-grid m-grid-3">
    <Curso />
    <Curso />  
    <Curso />
    <Curso />  
    <Curso />
    <Curso />
  </div>

  </>
)


export default App;
