import "./styles/styles.scss";
import Curso from "./Curso";

const cursos = [
  {
    title: "Curso de React",
    image: "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    price: 20,
    teacher: "Beto Quiroga",
  },
  {
    title: "Curso de Docker",
    image: "https://edteam-media.s3.amazonaws.com/courses/small/e41bbf77-d458-48d9-814b-7dd62a214e40.png",
    price: 20,
    teacher: "Beto Quiroga Docker",
  },
  {
    title: "Curso de Ingles",
    image: "https://edteam-media.s3.amazonaws.com/courses/small/4feb100b-5d47-4daf-b421-9983c5ecdfa8.png",
    price: 20,
    teacher: "Beto Quiroga",
  },
  {
    title: "Curso de React",
    image: "https://edteam-media.s3.amazonaws.com/courses/small/82dfe34a-4e3b-4904-bdb5-03f45112fcd2.png",
    price: 20,
    teacher: "Beto Quiroga Wordpress",
  },
      
]



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
    {
      cursos.map(
        eachObject => <Curso title={eachObject.title} image={eachObject.image} price={eachObject.price} teacher={eachObject.teacher} />
      )
    }
  </div>

  </>
)

export default App;
