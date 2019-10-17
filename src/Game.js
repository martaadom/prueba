import React from 'react';
import Actionbar from "./Actionbar";
import Content from "./Content";
import Button from "./Button";
import Author from "./Author";

export default class Game extends React.Component {
    render() { //return (<div> Mi primer componente</div>);
        if (this.props.ﬁnished===false){
         return (
             <div>{/* this.props.question.question </div>
             <input type..... value......*/}
                <Content question={this.props.question}
                         currentQuestion={this.props.currentQuestion}
                         onQuestionAnswer={this.props.onQuestionAnswer}
                         onChangeQuestion={this.props.onChangeQuestion}
                         onSubmit={this.props.onSubmit}
                         questions={this.props.questions}
                         lengthQuestions={this.props.lengthQuestions} />
                <Actionbar currentQuestion={this.props.currentQuestion}
                           onChangeQuestion={this.props.onChangeQuestion}
                           onSubmit={this.props.onSubmit}
                           onReset={this.props.onReset}
                           questions={this.props.questions}
                           lengthQuestions={this.props.lengthQuestions} />
                 <Author question={this.props.question} />
             </div>
        );
    } else {
        return(
            <center>
                <div>
                    <p class="congrats">Congratulations, you have ﬁnished the quiz!!!!</p>
                    <p class="score"><strong class="resultado"><u>SCORE</u>:</strong> {this.props.score}</p>
                    <button class="bReset" type="submit" onClick={()=>this.props.onReset()} value="Submit">{this.props.name}
                        Reset
                    </button>
                </div>
            </center>
        );}}}