import { getQuestionForId, getDecision } from '../story/game';
import ReactGA from 'react-ga4';

export const EVENT_CATEGORY_NEW_QUESTION_REACHED = "Question viewed";
export const EVENT_CATEGORY_NEW_ANSWER_CHOSEN = "Choice made";
export const EVENT_CATEGORY_SCORE_AWAWRDED = "Score awarded";

export const ACTION_NEW_QUESTION_REACHED = "questionReached";
export const ACTION_ANSWER_CHOSEN = "answerChosen";
export const ACTION_SCORE_AWARDED = "scoreAwarded";

export const LABEL_NEW_QUESTION_REACHED = "User reached new question";
export const LABEL_ANSWER_CHOSEN = "Answered";
export const LABEL_SCORE_AWARDED = "User was awarded score";

// https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b
export function initStats() {
    const measurementId = "G-SJSEFE24W0";
    ReactGA.initialize(measurementId);    
}


export function getReportForNewQuestionReached(questionId) {
    const question = getQuestionForId(questionId);
    const title = question.title;
    return {
        "category": EVENT_CATEGORY_NEW_QUESTION_REACHED,
        "action": ACTION_NEW_QUESTION_REACHED,
        "label": `${LABEL_NEW_QUESTION_REACHED}: ${questionId}`,
        "value": parseInt(questionId)
    }
}

export function getReportForAnswerChosen(choiceNum, questionId) {
    const choice = getDecision(choiceNum, questionId);
    const answerText = choice.title;

    return {
        "category": EVENT_CATEGORY_NEW_ANSWER_CHOSEN,
        "action": ACTION_ANSWER_CHOSEN,
        "label": `${LABEL_ANSWER_CHOSEN} question ${questionId}: ${answerText}`,
        "value": parseInt(questionId)
    }
}

export function getReportForScoreAwarded(score) {
    return {
        category: EVENT_CATEGORY_SCORE_AWAWRDED,
        action: ACTION_SCORE_AWARDED,
        label: score
    }
}

export function reportUserReachedNewQuestion(questionId) {  
    const report = getReportForNewQuestionReached(questionId);
    submit(report);
}

export function reportUserChoseAnswer(answer, questionId) {
    const report = getReportForAnswerChosen(answer, questionId);
    submit(report);
}

export function reportUserWasAwardedScore(score) {
    const report = getReportForScoreAwarded(score);
    submit(report);
}



function submit(params) {
    ReactGA.event(params);
}

/**
 * ga('send', 'event', {
  'category': 'Category',
  'eventAction': 'Action',
  'label': 'Label'
});
 */