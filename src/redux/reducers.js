import {combineReducers} from 'redux';
import { QUESTION_ANSWER } from './actions'
import { CHANGE_QUESTION} from './actions'
import { SUBMIT } from './actions'
import { INIT_QUESTIONS} from './actions'

function score(state = 0, action = {}){
    switch(action.type) {
        case SUBMIT: // evaluar las preguntas
            var newstate = 0;
            action.payload.questions.map((question) => {
                var q1 = question.answer.toLowerCase();
                if(question.userAnswer!==undefined){
                    var q2 = question.userAnswer.toLowerCase();
                } else {
                    var q2 = ""}
                if(q1 === q2){
                    return newstate++;
                } else {
                    return;}});
            return newstate;
        default:
            return state;}}
function ﬁnished(state = false, action = {}) {
    switch(action.type) {
        case INIT_QUESTIONS:
            var newstate = false;
            return newstate;
        case SUBMIT:
            var newstate = true;
            return newstate;
        default:
            return state;}}
function currentQuestion(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUESTION:
            var newstate=action.payload.index;
            return newstate;
        default:
            return state;}}
function questions(state = [], action = {}) {
    switch(action.type) {
        case INIT_QUESTIONS:
            var newstate = action.payload.questions;
            return newstate;
        case QUESTION_ANSWER:
            return state.map((question,i) => {
                return { ...question,
                    userAnswer: action.payload.index === i ?
                        action.payload.answer : question.userAnswer}
            });
        default:
            return state; }}
const GlobalState = (combineReducers({
    score,
    ﬁnished,
    currentQuestion,
    questions }));
export default GlobalState;