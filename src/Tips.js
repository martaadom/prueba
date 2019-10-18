
import React, {Component} from 'react';
import './App.css';

export default class Tips extends React.Component {
    render() {
        return (
            <div className={"cuerpo"}>
                Tips: {this.props.question.tips.length === 0 ?
                    <p>{" No tips"}</p> : this.props.question.tips.map(function (t) {
                        return <p>{t}</p>;
                    })}
            </div>
        );
    }
}
