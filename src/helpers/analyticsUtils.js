import { getQuestionForId, getChoice } from '../story/game';

export const EVENT_CATEGORY = "Capdesk Startup Game";

export const ACTION_NEW_QUESTION_REACHED = "questionReached";
export const ACTION_ANSWER_CHOSEN = "answerChosen";
export const ACTION_SCORE_AWARDED = "scoreAwarded";

export const LABEL_NEW_QUESTION_REACHED = "User reached new question";
export const LABEL_ANSWER_CHOSEN = "User chose answer";
export const LABEL_SCORE_AWARDED = "User was awarded score";

const GA_SEND = "send";
const GA_EVENT = "event";

export function getReportForNewQuestionReached(questionId) {
    const question = getQuestionForId(questionId);
    return {
        // TODO
    }
}

export function getReportForAnswerChosen(answer, questionId) {
    const decision = getDecision();
    return {
        // TODO
    }
}

export function getReportForScoreAwarded(score) {
    return {

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
    ga(GA_SEND, GA_EVENT, params);
}

/**
 * ga('send', 'event', {
  'eventCategory': 'Category',
  'eventAction': 'Action',
  'eventLabel': 'Label'
});
 */