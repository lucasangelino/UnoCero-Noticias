import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ( {noticia}) => {

    // Extraigo los datos de noticia con destructuracion
    const { urlToImage, url, title, description, source} = noticia;

    // Cargar imagen si esta disponible

    const image = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
        </div>
    : 
        null;
    
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {image}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-content">
                    <span class="new badge amber darken-4" data-badge-caption="custom caption"> {source.name} </span>
                </div>

                <div className="card-action">
                    <a 
                        href={ url } 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="waves-effect waves-light btn"
                    >
                        Ver notica
                    </a>
                </div>
            </div>
        </div>
    );
};
Noticia.propTypes = {
    noticia : PropTypes.object.isRequired
}

export default Noticia;