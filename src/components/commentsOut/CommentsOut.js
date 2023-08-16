import clsx from 'clsx';

import ReplayIcon from './../../img/icons/comment-replay.svg';
import OptionsIcon from './../../img/icons/kebab-menu.svg';

import './commentsOut.scss';
import { useEffect, useState } from 'react';
import CommentsInput from '../commentsInput/CommentsInput';
import { usersAdmin } from '../../data/adminData';

const CommentsOutWrite = ({ 
    arr, 
    answer, 
    parents, 
    level, 
    answerTextInput, 
    handleAnswerTextInput,
    commentsCount,
    handleCommentsCount,
}) => {
    const { answerComment, onAnswer, onNewAnwer } = answer;

    if (!level) {
        level = 1;
    }

    if (!parents) {
        parents = { mapParents: [] }
    }

    return (
        <ul className={clsx(
            'commentsOut',
            { 'commentsOut_origin': level == 1 },
            { 'commentsOut_level': level > 1 },
            { [`commentsOut_level_${level}`]: level > 1 }
        )}
        >
            {arr.map((item, i) => {
                const map = parents.mapParents.slice(0, level - 1);
                map.push(i);

                parents.mapParents = map;

                return (
                    <li key={i} className="commentsOut__item">
                        <div className="commentsOut__author">
                            <div className="commentsOut__avatar">
                                <img src={item.user.avatar} alt={item.user.name} />
                            </div>
                            <div class="commentsOut__profile">
                                <div className="commentsOut__name">
                                    {item.user.name}
                                </div>
                                <div className="commentsOut__activity">
                                    {item.user.activity}
                                </div>
                            </div>
                            {parents?.userParent && (
                                <div class="commentsOut__answerFor">
                                    <div className="commentsOut__replayIcon">
                                        <img src={ReplayIcon} alt="replay" />
                                    </div>
                                    {parents.userParent?.name}
                                </div>
                            )}
                        </div>
                        <div className="commentsOut__text">
                            {item.comment}
                        </div>
                        <div className="commentsOut__utilities">
                            <button
                                type="button"
                                class="commentsOut__answerBtn"
                                onClick={() => onAnswer(map)}
                            >
                                Answer
                            </button>
                            <button type="button" class="commentsOut__answerBtn">
                                <img src={OptionsIcon} alt="options" />
                            </button>
                        </div>
                        {answerComment.toString() === map.toString() && (
                            <div className="commentsOut__answerInput">
                                <CommentsInput
                                    profile={usersAdmin[0]}
                                    placeholder='Your answer'
                                    value={answerTextInput}
                                    onChange={handleAnswerTextInput}
                                    onSubmit={() => onNewAnwer(level, i, map)}
                                />
                            </div>
                        )}
                        {item.answers && (
                            <CommentsOutWrite
                                arr={item.answers}
                                answer={{ answerComment: answerComment, onAnswer: onAnswer, onNewAnwer: onNewAnwer }}
                                parents={{ mapParents: parents.mapParents, userParent: item.user }}
                                level={level + 1}
                                answerTextInput={answerTextInput}
                                handleAnswerTextInput={handleAnswerTextInput}
                                commentsCount={commentsCount}
                                handleCommentsCount={handleCommentsCount}
                            />
                        )}
                    </li>
                )
            })}
        </ul>
    )
}


const CommentsOut = ({
    commentsCount,
    handleCommentsCount,
    comments,
    answerTo,
    handleAnswerTo,
    answerValue,
    onAnswerChange,
    onAnswerSubmit,
}) => {
    return (
        <>
            <CommentsOutWrite
                arr={comments}
                answer={{
                    answerComment: answerTo,
                    onAnswer: handleAnswerTo,
                    onNewAnwer: onAnswerSubmit,
                }}
                answerTextInput={answerValue}
                handleAnswerTextInput={onAnswerChange}
                commentsCount={commentsCount}
                handleCommentsCount={handleCommentsCount}
            />
        </>
    )
}

export default CommentsOut;