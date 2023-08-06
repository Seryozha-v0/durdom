import clsx from 'clsx';

import ReplayIcon from './../../img/icons/comment-replay.svg';
import OptionsIcon from './../../img/icons/kebab-menu.svg';

import './commentsOut.scss';
import { useEffect, useState } from 'react';
import CommentsInput from '../commentsInput/CommentsInput';
import { usersAdmin } from '../../data/adminData';

const CommentsOutWrite = ({ arr, answer, parents, level }) => {
    const { answerComment, onAnswer } = answer;

    if (!level) {
        level = 1;
    }

    if (!parents) {
        parents = { mapParents: [], currParent: 0, parLevel: level }
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
                            {true && (
                                <div class="commentsOut__answerFor">
                                    <div className="commentsOut__replayIcon">
                                        <img src={ReplayIcon} alt="replay" />
                                    </div>
                                    {/* {mainAuthor?.name} */}
                                    lvl: {level} - map: {map} - {i}
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
                                onClick={() => onAnswer(level, i, map)}
                            >
                                Answer {map}
                            </button>
                            <button type="button" class="commentsOut__answerBtn">
                                <img src={OptionsIcon} alt="options" />
                            </button>
                        </div>
                        {false && (
                            <div className="commentsOut__answerInput">
                                <CommentsInput
                                    profile={usersAdmin[0]}
                                    placeholder='Your answer'
                                />
                            </div>
                        )}
                        {item.answers && (
                            <CommentsOutWrite
                                arr={item.answers}
                                answer={{ answerComment: answerComment, onAnswer: onAnswer }}
                                parents={{ mapParents: parents.mapParents, currParent: i, parLevel: level }}
                                level={level + 1}
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
    const [answerComment, setAnswerComment] = useState(false)

    const handleAnswerComment = (level, i, mapToComment) => {
        let secCommentsArr = commentsArr.slice();

        secCommentsArr = mapComments(mapToComment, secCommentsArr, level);

        setCommentsArr(secCommentsArr);
    }

    const mapComments = (mapToComment, comments, level, currLevel, map) => {
        if (!currLevel) {
            currLevel = 1;
        }

        if (!map) {
            map = [];
            console.log('create map')
        }

        comments.map((comment, i) => {
            const currMap = map.slice(0, currLevel - 1);
            currMap.push(i);

            map = currMap;

            if (map.toString() == mapToComment.toString()) {
                console.log(map, mapToComment);
                console.log(comment);
                comment.answers.push(
                    {
                        user: usersAdmin[0],
                        comment: 'test',
                    }
                )
            }

            if (comment.answers) {
                mapComments(mapToComment, comment.answers, level, currLevel + 1, map);
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
                    answer={{ answerComment: answerComment, onAnswer: handleAnswerComment }}
                />
            )}
        </>
    )
}

export default CommentsOut;