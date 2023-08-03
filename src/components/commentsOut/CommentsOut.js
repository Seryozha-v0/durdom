import clsx from 'clsx';

import ReplayIcon from './../../img/icons/comment-replay.svg';
import OptionsIcon from './../../img/icons/kebab-menu.svg';

import './commentsOut.scss';
import { useEffect, useState } from 'react';
import CommentsInput from '../commentsInput/CommentsInput';
import { usersAdmin } from '../../data/adminData';

const CommentsOutWrite = (arr, answerComment, handleAnswerComment, level, mainAuthor, itemMap, index) => {
    if (level == undefined) level = 1;
    if (itemMap === undefined) {
        itemMap = []
    } else {
        itemMap.push(index);
    };

    console.log(itemMap, index);

    return (
        <ul className={clsx(
            'commentsOut',
            { 'commentsOut_origin': level == 1 },
            { 'commentsOut_level': level > 1 },
            { [`commentsOut_level_${level}`]: level > 1 }
        )}
        >
            {arr.map((item, i) => (
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
                        {level > 1 && (
                            <div class="commentsOut__answerFor">
                                <div className="commentsOut__replayIcon">
                                    <img src={ReplayIcon} alt="replay" />
                                </div>
                                {mainAuthor?.name}
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
                            onClick={() => handleAnswerComment(itemMap, level, i)}
                        >
                            Answer
                        </button>
                        <button type="button" class="commentsOut__answerBtn">
                            <img src={OptionsIcon} alt="options" />
                        </button>
                    </div>
                    {
                    level === answerComment.level &&
                        i === answerComment.index &&
                        answerComment.isOpen && (
                            <div className="commentsOut__answerInput">
                                <CommentsInput
                                    profile={usersAdmin[0]}
                                    placeholder='Your answer'
                                />
                            </div>
                        )}
                    {item.answers && CommentsOutWrite(
                        item.answers,
                        answerComment,
                        handleAnswerComment,
                        level + 1,
                        level === 1 && item.user || level > 1 && mainAuthor,
                        itemMap,
                        i,
                    )}
                </li>
            ))}
        </ul>
    )
}


const CommentsOut = ({
    comments,
}) => {
    const [commentsArr, setCommentsArr] = useState([]);
    const [answerComment, setAnswerComment] = useState({
        itemMap: null,
        level: null,
        index: null,
        isOpen: false,
    })

    const handleAnswerComment = (itemMap, level, index) => {
        if (level === answerComment.level && index === answerComment.index && answerComment.isOpen) {
            return setAnswerComment({
                itemMap: null,
                level: null,
                index: null,
                isOpen: false,
            });
        }

        setAnswerComment({
            itemMap: itemMap,
            level: level,
            index: index,
            isOpen: true,
        });
    }

    console.log(answerComment);

    useEffect(() => {
        const arr = comments;
        setCommentsArr(arr);
    }, []);

    return (
        CommentsOutWrite(commentsArr, answerComment, handleAnswerComment)
    )
}

export default CommentsOut;