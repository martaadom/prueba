import React, {Component} from 'react';
import Tips from "./Tips";


import './App.css'
export default class Content extends React.Component {
    render() {
    if(this.props.question ===undefined){ //tenemos en cuenta si el array de preguntas está vacio
        return(
            <p>"No hay preguntas"</p>
        );
    } else {
        return (

                <div className={"cuerpo"}>
                    <input type="image" src={this.props.question.attachment.url} width="400" heigth="400"/>
                    <p> <b>QUESTION { this.props.currentQuestion + 1}: {this.props.question.question}</b></p>
                    <input type="text" value={this.props.question.userAnswer || ""}
                           onChange={(e) => {
                        this.props.onQuestionAnswer(e.target.value);
                    }}/>
                    <div>Tips:
                        {this.props.question.tips.length === 0 ?
                            <p>{"No tips"}</p> : this.props.question.tips.map(function (t) {
                                return <p>{t}</p>;
                            })}
                    </div>
                </div>

        );
    }}}