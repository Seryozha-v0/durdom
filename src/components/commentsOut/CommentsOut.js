import clsx from 'clsx';

import ReplayIcon from './../../img/icons/comment-replay.svg';
import OptionsIcon from './../../img/icons/kebab-menu.svg';

import './commentsOut.scss';
import { useEffect, useState } from 'react';
import CommentsInput from '../commentsInput/CommentsInput';
import { usersAdmin } from '../../data/adminData';

const CommentsOutWrite = ({ arr, answer, parents, level, answerTextInput, handleAnswerTextInput }) => {
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
                            />
                        )}
                    </li>
                )
            })}
        </ul>
    )
}


const CommentsOut = ({
    comments,
}) => {
    const [commentsArr, setCommentsArr] = useState([]);
    const [answerComment, setAnswerComment] = useState([]);
    const [answerTextInput, setAnwerTextInput] = useState('');

    const handleAnswerTextInput = (e) => {
        const text = e.target.value;
        setAnwerTextInput(text);
    }

    const handleAnswerComment = (map) => {
        if (map.toString() === answerComment.toString()) {
            return setAnswerComment([]);
        }
        setAnswerComment(map);
    }

    const handleCommentsArr = (level, i, mapToComment) => {
        let secCommentsArr = commentsArr.slice();

        secCommentsArr = newCommentsAdd(mapToComment, secCommentsArr, level);

        setCommentsArr(secCommentsArr);
        setAnswerComment([]);
    }

    const newCommentsAdd = (mapToComment, comments, level, currLevel, map) => {
        if (!currLevel) {
            currLevel = 1;
        }

        if (!map) {
            map = [];
        }

        comments.map((comment, i) => {
            const currMap = map.slice(0, currLevel - 1);
            currMap.push(i);

            map = currMap;

            if (map.toString() == mapToComment.toString()) {
                comment.answers.push(
                    {
                        user: usersAdmin[0],
                        comment: answerTextInput,
                        answers: [],
                    }
                )
                setAnwerTextInput('');
                return true;
            }

            if (comment.answers) {
                newCommentsAdd(mapToComment, comment.answers, level, currLevel + 1, map);
            }
        })

        return comments;
    }

    useEffect(() => {
        const arr = comments;
        setCommentsArr(arr);
    }, []);

    return (
        <>
            {commentsArr && (
                <CommentsOutWrite
                    arr={commentsArr}
                    answer={{ answerComment: answerComment, onAnswer: handleAnswerComment, onNewAnwer: handleCommentsArr }}
                    answerTextInput={answerTextInput}
                    handleAnswerTextInput={handleAnswerTextInput}
                />
            )}
        </>
    )
}

export default CommentsOut;