import React, {Component} from 'react';
import Tips from "./Tips";
import './App.css'
import Button from "./Button";
export default class Content extends React.Component {
    render() {
    if(this.props.question ===undefined){ //tenemos en cuenta si el array de preguntas está vacio
        return(
            <p>"No hay preguntas"</p>
        );
    } else {
        return (
        <div className={"cuerpoTotal"}>
                <div className={"cuerpo"}>
                    <Button lengthQuestions={this.props.lengthQuestions}
                            currentQuestion={this.props.currentQuestion}
                            onChangeQuestion={this.props.onChangeQuestion}
                            onSubmit={this.props.onSubmit}
                            questions={this.props.questions}
                            name="Previous"/>
                    <input type="image" src={this.props.question.attachment.url} width="400" heigth="400"/>
                    <Button lengthQuestions={this.props.lengthQuestions}
                            currentQuestion={this.props.currentQuestion}
                            onChangeQuestion={this.props.onChangeQuestion}
                            onSubmit={this.props.onSubmit}
                            questions={this.props.questions}
                            name="Next"/>
                </div>

                <div className={"cuerpo2"}>
                        <p> <b>QUESTION { this.props.currentQuestion + 1}: {this.props.question.question}</b></p>
                        <input type="text" value={this.props.question.userAnswer || ""}
                           onChange={(e) => {
                        this.props.onQuestionAnswer(e.target.value);
                        }}/>
                </div>
                <div>
                        <Tips question={this.props.question}/>
                </div>
        </div>
        );
    }}}