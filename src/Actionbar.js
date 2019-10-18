import React from 'react';
import Button from "./Button";
export default class Actionbar extends React.Component {
    render() {
        return (
        <div className={"botonesyvideo"}>
            <center>
                <Button lengthQuestions={this.props.lengthQuestions}
                        currentQuestion={this.props.currentQuestion}
                        onChangeQuestion={this.props.onChangeQuestion}
                        onSubmit={this.props.onSubmit}
                        questions={this.props.questions}
                        name="Submit"/>
            </center>
            <div className={"videoyreset"}>
                <div className={"video"}>
                <iframe width="200" height="100" src="https://www.youtube.com/embed/mWV9h5KfziY" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>

            <Button name="Reset" onReset={this.props.onReset}/>
            </div>
        </div>
    );}}

