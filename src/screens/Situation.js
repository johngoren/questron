import React, { useEffect } from 'react';
import { fadeInLetters } from '../effects/effects';
import { prepareText } from '../helpers/textUtils';
import { getIconForChapter } from '../helpers/iconUtils';

export default function Situation(props) {

    const text = prepareText(props.body);
    const Icon = getIconForChapter(props.chapterNum);
    useEffect(fadeInLetters);

    return (
        <div className="question">
            <div className="banner">
                {Icon}
                <div className="text">
                    <h2 className="company">Capdes<span className="garnish">k</span></h2>
                    <h1 className="headline">{props.title}</h1>
                </div>
            </div>
          
            <div className="teletype">{text}</div>
        </div>
    )
}

