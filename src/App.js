import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'

// API key - 46f2c8f0caf84176b388d584fb606bae


class App extends Component {
  state = {
    noticias : []
  }

componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=46f2c8f0caf84176b388d584fb606bae`;
    const rta = await fetch(url);
    const noticias = await rta.json();
    console.log(noticias)

    this.setState({ noticias : noticias.articles })
  }


  render() {
    return (
      <Fragment>
        <Header 
          titulo ='UnoCero Noticias'
        />

        <div className="container white contenedor-noticias">

          <Formulario 
            consultarNoticias={ this.consultarNoticias }
          
          />

          <ListaNoticias
            noticias={ this.state.noticias }
          />
        </div>
      </Fragment>
    );
  }
}

export default App;

