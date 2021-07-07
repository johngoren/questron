const ACTION_NEW_QUESTION_REACHED = "questionReached";
const ACTION_ANSWER_CHOSEN = "answerChosen";
const ACTION_SCORE_AWARDED = "scoreAwarded";

const LABEL_NEW_QUESTION_REACHED = "User reached new question";
const LABEL_ANSWER_CHOSEN = "User chose answer";
const LABEL_SCORE_AWARDED = "User was awarded score";

import { getChoice } from '../game';

export function pingNewQuestion(id) {
    
}

export function pingAnswerChosen(choiceNum, id) {

}

export function pingScoreAwarded(score) {

}

function send(action, label, value) {
    ga('send', {
        hitType: "event",
        eventCategory: "game",
        eventAction: action,
        eventLabel: label,
        eventValue: value
    });
}