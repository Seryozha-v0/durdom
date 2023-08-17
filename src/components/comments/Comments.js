import { useEffect } from "react";
import CommentsInput from "../commentsInput/CommentsInput";
import CommentsOut from "../commentsOut/CommentsOut";

import './comments.scss';

const Comments = ({
    headerValue,
    onHeaderChange,
    onHeaderSubmit,
    commentsCount,
    handleCommentsCount,
    userFrom,
    commentsArray,
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
    const getCommentsCount = (arr, count) => {
        if (!count) count = 0;
        
        arr.map((item, i) => {
            count++;
            
            if (item.answers.length )
                count = getCommentsCount(item.answers, count);
        })

        return count;
    };

    useEffect(() => {
        handleCommentsCount(getCommentsCount(commentsArray));
    })

    return (
        <div class="comments">
            <div className="comments__header">
                <div className="comments__title">
                    {commentsCount} comments
                </div>
                <CommentsInput
                    profile={userFrom}
                    placeholder='Write your thoughts on the project'
                    value={headerValue}
                    onChange={onHeaderChange}
                    onSubmit={onHeaderSubmit}
                />
            </div>
            
            <CommentsOut
                commentsCount={commentsCount}
                handleCommentsCount={handleCommentsCount}
                comments={commentsArray}
                answerTo={answerTo}
                handleAnswerTo={handleAnswerTo}
                answerValue={answerValue}
                onAnswerChange={onAnswerChange}
                onAnswerSubmit={onAnswerSubmit}
                commentOption={commentOption}
                handleCommentOption={handleCommentOption}
                commentEditValue={commentEditValue}
                handleCommentEditValue={handleCommentEditValue}
                editTo={editTo}
                handleEditTo={handleEditTo}
                handleCommentEdit={handleCommentEdit}
                onDelete={onDelete}
            />
        </div>
    )
}

export default Comments;