import React, { Component } from 'react';
import MockNoticias from 'app/mocks/MockNoticias';
import _ from 'lodash';

class VisualizacaoDados extends Component {
    constructor(props){
        super(props);
        this.podeVisualizarNoticia = true;
    }
    toggleVisualizacao = (noticia, id) => {
        if(!noticia.classList.contains("ver-noticia") && !this.podeVisualizarNoticia) return;
        else if(noticia.classList.contains("ver-noticia") && !this.podeVisualizarNoticia){
            this.podeVisualizarNoticia = true;
        } else {
            this.podeVisualizarNoticia = false;   
        }

        noticia.classList.toggle("ver-noticia");
        let noticiaVizinha;
        let outrasNoticias = document.querySelectorAll(".noticia:not(.noticia-" + id +")");
        _.map(outrasNoticias, (el) => {
            let descricao = el.children.item(el.children.length - 1);
            //descricao.style.opacity = this.podeVisualizarNoticia ? 1 : 0;
            el.classList.toggle("outras-noticias");
            if (el.offsetTop === noticia.offsetTop) {
                noticiaVizinha = el;
            }
        });

        noticiaVizinha.classList.toggle("vizinho-ver-noticia");
        // let NoticiaVizinha = _.find(document.getElementsByClassName("noticia"), (el) => { 
        //     return el.classList.contains("vizinho-ver-noticia") || el.offsetTop === noticia.offsetTop
        // });
    }

    render() {
        let noticias = [];
        _.forEach(MockNoticias, (dado, key) => {
            noticias.push(
                <article key={key} className={"noticia noticia-" + key}>
                    <span className="imagem-noticia" onClick={(e) => this.toggleVisualizacao(e.currentTarget.parentElement, key)}>
                        <img src={dado.miniatura} alt="" />
                    </span>
                    <span className="descricao-noticia">
                        <p className="dica-imagem">Clique na imagem para expandi-la.</p>
                        <h3>{dado.titulo}</h3>
                        <p>{_.truncate(dado.descricao, { 'length': 120, 'separator': ' ' })}</p>
                    </span>
                </article>
            );
        })
        return noticias
    }
}

class ViewNoticias extends Component {
    render() {
        return (
            <div style={{ display: this.props.visivel ? 'block' : 'none' }}>
                <div className="noticias">
                    <VisualizacaoDados/>
                </div>
            </div>
        )
    }
}

export default ViewNoticias;