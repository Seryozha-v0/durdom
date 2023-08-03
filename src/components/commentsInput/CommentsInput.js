import SendIcon from './../../img/icons/send-comment.svg';

import './commentsInput.scss';

const CommentsInput = ({ profile, placeholder, variant }) => {
    return (
        <div className="writeComment">
            <div className="writeComment__profile">
                <img src={profile.avatar} alt={profile.name} />
            </div>
            <div className="writeComment__input">
                <input type="text" placeholder={placeholder} />
                <button type='submit'>
                    <img src={SendIcon} alt="send" />
                </button>
            </div>
        </div>
    )
}

export default CommentsInput;