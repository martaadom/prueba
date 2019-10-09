import React from 'react';


export default class Content extends React.Component {     render() {
    if(this.props.question ===undefined){
        return(
            <p>"No hay preguntas"</p>
        );
    } else {
        return (

                <div>
                    <input type="image" src={this.props.question.attachment.url} width="400" heigth="400"/>
                    <p> Question { this.props.currentQuestion + 1}: {this.props.question.question}</p>
                    <input type="text" value={this.props.question.userAnswer || ""} onChange={(e) => {
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