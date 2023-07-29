import { useEffect, useState } from 'react';
import { commentsData } from '../../data/adminData';

import './adminComments.scss'
import clsx from 'clsx';

const CommentsOutWrite = (arr, level, mainAuthor) => {
    if (level == undefined) level = 1;

    return (
        <ul className={clsx(
            'commentsOut__block',
            { 'commentsOut__block_level': level > 1 },
            { [`commentsOut__block_${level}`]: level > 1 }
        )}
        >
            {arr.map((item, i) => (
                <li key={i} className="commentsOut__item">
                    <div className="commentsOut__author">
                        <div className="commentsOut__avatar">
                            <img src={item.user.avatar} alt={item.user.name} />
                        </div>
                        <div>
                            <div className="commentsOut__name">
                                {item.user.name}
                            </div>
                            <div className="commentsOut__activity">
                                {item.user.activity}
                            </div>
                        </div>
                        {level > 1 && (
                            <div class="commentsOut__answerFor">
                                {mainAuthor?.name}
                            </div>
                        )}
                    </div>
                    <div className="commentsOut__text">
                        {item.comment}
                    </div>
                    <div className="commentsOut__utilities">
                        <button type="button" class="commentsOut__answerBtn">Answer</button>
                        <button type="button" class="commentsOut__answerBtn">Options</button>
                    </div>
                    {item.answers && CommentsOutWrite(item.answers, level + 1, level === 1 && item.user || level > 1 && mainAuthor)}
                </li>
            ))}
        </ul>
    )
}

const AdminComments = () => {
    const [commentsCount, setCommentsCount] = useState([]);
    const [comments, setComments] = useState([]);

    const getLength = (arr) => {
        let length = arr.length;

        arr.forEach(el => {
            length += el.answers ? getLength(el.answers) : 0;
        });

        return length;
    };


    useEffect(() => {
        const arr = commentsData;
        setComments(arr);
    });

    useEffect(() => {
        const length = getLength(comments);
        setCommentsCount(length);
    }, [comments]);
    return (
        <section class="adminComments">
            <div class="sec-title">
                {commentsCount} comments
            </div>
            <div className="writeComment">
                <div className="writeComment__profile">
                    <img src="" alt="" />
                </div>
                <div className="writeComment__input">
                    <input type="text" />
                    <button type='submit'>Send</button>
                </div>
            </div>
            <div className="commentsOut">
                {comments.length ? (
                    CommentsOutWrite(comments)
                ) : ('Загрузка...')}
            </div>
        </section>
    )
}

export default AdminComments;