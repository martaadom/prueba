import React from 'react';
import Button from "./Button";
export default class Actionbar extends React.Component {
    render() {
        return (
        <div>
            <center>
                <Button lengthQuestions={this.props.lengthQuestions}
                        currentQuestion={this.props.currentQuestion}
                        onChangeQuestion={this.props.onChangeQuestion}
                        onSubmit={this.props.onSubmit}
                        questions={this.props.questions}
                        name="Submit"/>
            </center>
            <Button name="Reset" onReset={this.props.onReset}/>
        </div>
    );}}

