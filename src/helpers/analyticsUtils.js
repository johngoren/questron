import { getQuestionForId, getChoice } from '../story/game';
import ReactGA from 'react-ga';

export const EVENT_CATEGORY_NEW_QUESTION_REACHED = "Question viewed";
export const EVENT_CATEGORY_NEW_ANSWER_CHOSEN = "Choice made";
export const EVENT_CATEGORY_SCORE_AWAWRDED = "Score awarded";

export const ACTION_NEW_QUESTION_REACHED = "questionReached";
export const ACTION_ANSWER_CHOSEN = "answerChosen";
export const ACTION_SCORE_AWARDED = "scoreAwarded";

export const LABEL_NEW_QUESTION_REACHED = "User reached new question";
export const LABEL_ANSWER_CHOSEN = "User chose answer";
export const LABEL_SCORE_AWARDED = "User was awarded score";


export function getReportForNewQuestionReached(questionId) {
    const question = getQuestionForId(questionId);
    return {
        eventCategory: EVENT_CATEGORY_NEW_QUESTION_REACHED,
        eventAction: ACTION_NEW_QUESTION_REACHED,
        eventLabel: question.title
    }
}

export function getReportForAnswerChosen(answer, questionId) {
    const decision = getDecision();
    return {
        eventCategory: EVENT_CATEGORY_NEW_ANSWER_CHOSEN,
        eventAction: ACTION_ANSWER_CHOSEN
        // TODO
    }
}

export function getReportForScoreAwarded(score) {
    return {
        eventCategory: EVENT_CATEGORY_SCORE_AWAWRDED,
        eventAction: ACTION_SCORE_AWARDED
        // TODO
    }
}

export function reportUserReachedNewQuestion(questionId) {
    const report = getReportForNewQuestionReached(questionId);
    send(report);
}

export function reportUserChoseAnswer(answer, questionId) {
    const report = getReportForAnswerChosen(answer, questionId);
    send(report);
}

export function reportUserWasAwardedScore(score) {
    const report = getReportForScoreAwarded(score);
    send(report);
}



function send(params) {
    ReactGA.event(params);
}

/**
 * ga('send', 'event', {
  'eventCategory': 'Category',
  'eventAction': 'Action',
  'eventLabel': 'Label'
});
 */