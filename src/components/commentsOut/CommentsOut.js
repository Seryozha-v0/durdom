import clsx from 'clsx';

import ReplayIcon from './../../img/icons/comment-replay.svg';
import OptionsIcon from './../../img/icons/kebab-menu.svg';

import './commentsOut.scss';
import CommentsInput from '../commentsInput/CommentsInput';
import { usersAdmin } from '../../data/adminData';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Dashboard from '../dashboard/Dashboard';

import NoAvatar from './../../img/avatars/No-avatar@48.jpg';

dayjs.extend(relativeTime);

const CommentsOutWrite = ({
    commentsArray,
    answer,
    parents,
    level,
    answerTextInput,
    handleAnswerTextInput,
    commentsCount,
    handleCommentsCount,
    commentOption,
    handleCommentOption,
    commentEditValue,
    handleCommentEditValue,
    editTo,
    handleEditTo,
    handleCommentEdit,
    onDelete,
}) => {
    const { answerComment, onAnswer, onAnswerSubmit } = answer;

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
            {commentsArray.map((item, i) => {
                const map = parents.mapParents.slice(0, level - 1);
                map.push(i);

                parents.mapParents = map;

                return (
                    <li key={i} className="commentsOut__item">
                        <div className="commentsOut__author">
                            <div className="commentsOut__avatar">
                                <img src={item.user?.avatar || NoAvatar} alt={item.user?.name || 'Unname user'} />
                            </div>
                            <div class="commentsOut__profile">
                                <div className="commentsOut__name">
                                    {item.user?.name || 'Unname user'}
                                </div>
                                {item.user?.activity && (
                                    <div className="commentsOut__activity">
                                        {dayjs(item.user?.activity).fromNow()}
                                    </div>
                                )}
                            </div>
                            {parents?.userParent && (
                                <div class="commentsOut__answerFor">
                                    <div className="commentsOut__replayIcon">
                                        <img src={ReplayIcon} alt="replay" />
                                    </div>
                                    {parents.userParent?.name || 'Deleted'}
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
                            <div class="commentsOut__optionsMenu">
                                <button
                                    type="button"
                                    class="commentsOut__answerBtn"
                                    onClick={() => handleCommentOption(map)}
                                >
                                    <img src={OptionsIcon} alt="options" />
                                </button>
                                {commentOption.toString() == map.toString() && (
                                    <Dashboard spClass="commentsOut__options">
                                        <button
                                            className="commentsOut__optionItem"
                                            onClick={() => handleEditTo(map, item.comment)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="commentsOut__optionItem"
                                            onClick={() => onDelete(level, i, map)}
                                        >
                                            Delete
                                        </button>
                                        <button className="commentsOut__optionItem">
                                            Report
                                        </button>
                                    </Dashboard>
                                )}
                            </div>
                        </div>
                        {answerComment.toString() === map.toString() && (
                            <div className="commentsOut__answerInput">
                                <CommentsInput
                                    profile={usersAdmin[0]}
                                    placeholder='Your answer'
                                    value={answerTextInput}
                                    onChange={handleAnswerTextInput}
                                    onSubmit={() => onAnswerSubmit(level, i, map)}
                                />
                            </div>
                        )}
                        {editTo.toString() === map.toString() && (
                            <div className="commentsOut__answerInput">
                                <CommentsInput
                                    profile={usersAdmin[0]}
                                    placeholder='Your new comment'
                                    value={commentEditValue}
                                    onChange={handleCommentEditValue}
                                    onSubmit={() => handleCommentEdit(level, i, map)}
                                />
                            </div>
                        )}
                        {item.answers && (
                            <CommentsOutWrite
                                commentsArray={item.answers}
                                answer={{ answerComment: answerComment, onAnswer: onAnswer, onAnswerSubmit: onAnswerSubmit }}
                                parents={{ mapParents: parents.mapParents, userParent: item.user }}
                                level={level + 1}
                                answerTextInput={answerTextInput}
                                handleAnswerTextInput={handleAnswerTextInput}
                                commentsCount={commentsCount}
                                handleCommentsCount={handleCommentsCount}
                                commentOption={commentOption}
                                handleCommentOption={handleCommentOption}
                                commentEditValue={commentEditValue}
                                handleCommentEditValue={handleCommentEditValue}
                                editTo={editTo}
                                handleEditTo={handleEditTo}
                                handleCommentEdit={handleCommentEdit}
                                onDelete={onDelete}
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
    commentOption,
    handleCommentOption,
    commentEditValue,
    handleCommentEditValue,
    editTo,
    handleEditTo,
    handleCommentEdit,
    onDelete,
}) => {
    return (
        <>
            <CommentsOutWrite
                commentsArray={comments}
                answer={{
                    answerComment: answerTo,
                    onAnswer: handleAnswerTo,
                    onAnswerSubmit: onAnswerSubmit,
                }}
                answerTextInput={answerValue}
                handleAnswerTextInput={onAnswerChange}
                commentsCount={commentsCount}
                handleCommentsCount={handleCommentsCount}
                commentOption={commentOption}
                handleCommentOption={handleCommentOption}

                commentEditValue={commentEditValue}
                handleCommentEditValue={handleCommentEditValue}
                editTo={editTo}
                handleEditTo={handleEditTo}
                handleCommentEdit={handleCommentEdit}

                onDelete={onDelete}
            />
        </>
    )
}

export default CommentsOut;