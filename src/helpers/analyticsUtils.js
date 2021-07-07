import { getQuestionForId, getChoice, getChoicesForIndex, getDecision } from '../story/game';
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

// https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b
export function initStats() {
    const trackingId = "UA-277910246-1";
    ReactGA.initialize(trackingId);    
}


export function getReportForNewQuestionReached(questionId) {
    const question = getQuestionForId(questionId);
    const title = question.title;
    return {
        "eventCategory": EVENT_CATEGORY_NEW_QUESTION_REACHED,
        "eventAction": ACTION_NEW_QUESTION_REACHED,
        "eventLabel": `${LABEL_NEW_QUESTION_REACHED}: ${questionId}`,
        "eventValue": title
    }
}

export function getReportForAnswerChosen(choiceNum, questionId) {
    const choice = getDecision(choiceNum, questionId);
    const answerText = choice.title;

    return {
        "eventCategory": EVENT_CATEGORY_NEW_ANSWER_CHOSEN,
        "eventAction": ACTION_ANSWER_CHOSEN,
        "eventLabel": `${LABEL_ANSWER_CHOSEN} for question ${questionId}: ${answerText}`,
        "eventValue": answerText
    }
}

export function getReportForScoreAwarded(score) {
    return {
        eventCategory: EVENT_CATEGORY_SCORE_AWAWRDED,
        eventAction: ACTION_SCORE_AWARDED,
        eventLabel: `${LABEL_SCORE_AWARDED}: ${score}`,
        eventValue: score
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