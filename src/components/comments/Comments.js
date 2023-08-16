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
}) => {
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
            />
        </div>
    )
}

export default Comments;