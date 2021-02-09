import React from 'react'
import PropTypes from 'prop-types'

//const getEdad = edad => edad > 18
// {`Este Es mi Nombre ${datos.nombre}` }
// { getEdad(datos.Edad) ? "Es mayor" : "No es Mayor"}

const Curso = ({title, image, price, teacher}) =>(
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
            <div className="circle img-container">
                <img src="https://ux.ed.team/img/profesor.jpg" alt={teacher} />
            </div>
            </div>
            <span className="small">{teacher}</span>
        </div>
        </div>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="ed.team">$ {price} USD</a>
        </div>
    </div>
    </article>
)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    teacher: PropTypes.string,
}

Curso.defaultProps = {
    title: "No se encontro el Titulo", 
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WClquzREj5wSmuxg_CMIjgHaFM%26pid%3DApi&f=1",
    price: "--",
    teacher:"Sin definir",
}

export default Curso;
