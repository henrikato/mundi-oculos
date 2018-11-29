import React, { Component } from 'react';
import _ from 'lodash';
import Moment from 'moment';
import Chart from 'chart.js';
import MockDadosChart from 'app/mocks/MockDadosChart';

class GeraChart extends Component{
    _geraRGBRandom = (callback) => {
        let r = Math.random() * 255 + 1, g = Math.random() * 255 + 1, b = Math.random() * 255 + 1;
        if (typeof callback === 'function') {
            return callback(r, g, b);
        } else {
            return [r, g, b];
        }
    }
    
    componentDidMount = () => {
        let dataSet = require('../../mocks/ojogo');
        let labelsChart = _.map(dataSet.registros, (registro) => { 
            return Moment(registro.dia + " " + registro.hora).format("MM/DD/YYYY HH:mm[h]");
        });
        let dadosChart = _.map(dataSet.registros, (registro) => { return registro.termos });

        let _datasets = [];
        _.map(dadosChart[0], (item, palavraChave) => {
            let elementos = [];
            _.find(dadosChart, (itens) => {
                elementos.push(itens[palavraChave]);
            });
            _datasets.push({[palavraChave]: elementos});
        });

        let canvas = document.getElementById("chart");
        let chart = new Chart(canvas, {
            type: "line",
            data: {
                labels: labelsChart,
                datasets: _datasets.map((dataset) => {
                    let bgLinha, bordaLinha, bgPonto, bordaPonto;
                    this._geraRGBRandom((r, g, b) => {
                        bgLinha = `rgba(${r}, ${g}, ${b}, .1)`;
                        bordaLinha = `rgba(${r}, ${g}, ${b}, 1)`;
                    });
                    this._geraRGBRandom((r, g, b) => {
                        bgPonto = `rgba(${r}, ${g}, ${b}, .3)`;
                        bordaPonto = `rgba(${r}, ${g}, ${b}, 1)`;
                    });
                    return {
                        label: Object.keys(dataset)[0],
                        data: Object.values(dataset)[0], 
                        backgroundColor: bgLinha,
                        borderColor: bordaLinha,
                        pointBackgroundColor: bgPonto,
                        pointBorderColor: bordaPonto,
                        pointBorderWidth: 2,
                        pointHoverBackgroundColor: bgPonto,
                        pointHoverBorderColor: bordaPonto,
                        pointHoverBorderWidth: 2,
                        borderWidth: 2,
                        pointRadius: 5
                    }
                }),
            },
            options: {
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }
        });
        chart.render({
            duration: 600,
            lazy: false,
            easing: "easeOutExpo"
        })
    }

    render(){
        return (<canvas id="chart" width={this.props.largura} height={this.props.altura} ></canvas>)
    }
}

class ViewGraficos extends Component {
    render() {
        if (this.props.visivel) {
            return (
                <div>
                    <div className="grafico">
                        <div class="descricao-grafico">
                            <h1>Palavras-chave mais encontradas nas suas notícias</h1>
                            <p>Estas são as palavras-chave que mais apareceram na sua seleção de notícias.</p>
                        </div>
                        <GeraChart dados={MockDadosChart} largura="200" altura="100" />
                    </div>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}

export default ViewGraficos;