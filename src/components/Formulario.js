import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = {
        categoria : ''
    }

    componentDidMount(){
        this.setState({ categoria : 'general' })
    }

    handleChange = e =>{
        this.setState( {
            categoria : e.target.value 
        }, () =>{
            this.props.consultarNoticias(this.state.categoria)
        });

        // Pasar el valor al parent component
        
    }


    render() {
        return (
            <div className="buscador row">
                <div className = "col s12 m8 offset-m2">
                    <form>
                        <h4>Categorias</h4>

                        <div className="input-field col s12">
                            <select
                                onChange={this.handleChange}
                            >
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}

export default Formulario;