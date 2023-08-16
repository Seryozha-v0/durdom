import { useEffect, useState } from 'react';
import { commentsData, usersAdmin } from '../../data/adminData';
import CommentsOut from '../commentsOut/CommentsOut';

import './adminComments.scss'
import CommentsInput from '../commentsInput/CommentsInput';

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
            <CommentsInput 
                profile={usersAdmin[0]}
                placeholder='Write your thoughts on the project'
            />
            <div className="adminComments__outBlock">
                {comments.length ? (
                    <CommentsOut
                        comments={comments}
                    />
                ) : ('Загрузка...')}
            </div>
        </section>
    )
}

export default AdminComments;