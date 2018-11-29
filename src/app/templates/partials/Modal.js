import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CustomModal extends Component{
    componentDidMount = () => {
        this.popup = document.createElement("div");
        this.popup.style.display = this.props.visivel ? 'block' : 'none';
        document.body.appendChild(this.popup);
        this._renderLayer();
    }

    componentDidUpdate = () => this._renderLayer();


    componentWillUnmount = () => {
        //React.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
    }

    _renderLayer = () => ReactDOM.render(this.props.children, this.popup);

    render = () => {
        return (
            <div style={{ display: this.props.visivel ? 'block' : 'none' }} className="modal">
                <div className={"conteudo-modal " + this.props.classeModal}>
                    { this.props.children }
                </div>
            </div>
            )
    };
}
export default CustomModal;