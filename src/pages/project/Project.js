import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { projects } from "../../data/projectsData";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import dayjs from "dayjs";

import CommentsOut from "../../components/commentsOut/CommentsOut";

import './projects.scss';

import InteresIcon from "./../../img/icons/interes/fill.svg";
import CommentsIcon from "./../../img/icons/comments.svg";
import TimeIcon from "./../../img/icons/time.svg";
import EmailIcon from "./../../img/icons/email.svg";
import BookmarkIcon from "./../../img/icons/bookmark-add.svg";
import ReportIcon from "./../../img/icons/report.svg";
import VkIcon from "./../../img/icons/socials/vk.svg";
import TwitterIcon from "./../../img/icons/socials/twitter.svg";
import FbIcon from "./../../img/icons/socials/facebook.svg";
import TgIcon from "./../../img/icons/socials/telegram.svg";
import WhatsappIcon from "./../../img/icons/socials/whatsapp.svg";
import Comments from "../../components/comments/Comments";
import { usersAdmin } from "../../data/adminData";

const Project = () => {
    const Params = useParams();
    const id = Params.id;

    const [project, setProject] = useState({});
    const { author, comments } = project;

    //commentsInput
    const [commentValue, setCommentValue] = useState('');
    const handleCommentValue = (e) => {
        const newValue = e.target.value;
        setCommentValue(newValue);
    }
    const commentSubmit = () => {
        const secComments = comments;
        const comment = {
            user: usersAdmin[0],
            comment: commentValue,
            answers: [],
        };
        secComments.push(comment);
        setProject({ ...project, comments: secComments });
        setCommentValue('');
    }

    //commentsCount
    const [commentsCount, setCommentsCount] = useState(0);
    const handleCommentsCount = (value) => {
        setCommentsCount(value);
    }

    //commentAnswer
    const [answerTo, setAnswerTo] = useState([]);
    const handleAnswerTo = (map) => {
        map.toString() === answerTo.toString() ? setAnswerTo([]) : setAnswerTo(map);
        setCommentAnswerValue('');
    }

    //commentsAnswerInput
    const [commentAnswerValue, setCommentAnswerValue] = useState('');
    const handleCommentAnswerValue = (e) => {
        const newValue = e.target.value;
        setCommentAnswerValue(newValue);
    }

    //addCommentAnswer
    const handleCommentAnswer = (levelFrom, indexFrom, mapTo) => {
        let commentsArray = comments.slice();
        console.log(mapTo);
        commentsArray = findAndAddAnswer(mapTo, commentsArray, levelFrom, 1, []);
        console.log(commentsArray);
        setProject({...project, comments: commentsArray});
        setAnswerTo([]);
        setCommentAnswerValue('');
    }

    const findAndAddAnswer = (mapTo, commentsArr, level, currLevel, currMap) => {
        if (!currLevel) currLevel = 1;

        commentsArr.find((item, i) => {
            const elMap = currMap.slice(0, currLevel - 1);
            elMap.push(i);
            currMap = elMap;

            if(mapTo.toString() == currMap.toString()) {
                console.log(item);
                const comment = {
                    user: usersAdmin[0],
                    comment: commentAnswerValue,
                    answers: [],
                }
                item.answers.push(comment);
                return true;
            }
            console.log(currMap);
            console.log(item.answers.length);
            if (mapTo[0] === currMap[0] && item.answers.length) findAndAddAnswer(mapTo, item.answers, level, currLevel + 1, currMap)
        });

        return commentsArr;
    }

    useEffect(() => {
        const arrProjects = projects;
        const findProject = arrProjects.find(el => el.id == id);

        setProject(findProject);
    }, [id])

    return (
        <div class="container container_row">
            <div class="container__section">
                <section class="project">
                    <div className="sec-container sec-container_project">
                        <h2 class="project__title">
                            {project?.title}
                        </h2>
                        <p className="project__description">
                            {project?.description}
                        </p>
                        <div className="project__content">
                            <ReactMarkdown children={project?.text} />
                        </div>
                        <div className="project__footer">
                            <div class="project__popular">
                                <div className="project__watched">
                                    <div className="project__Icon">
                                        <img src={InteresIcon} alt="" />
                                    </div>
                                    <span>Interesting</span>
                                    <span>{project?.watched}</span>
                                </div>
                                <div className="project__commentsCount">
                                    <div className="project__Icon">
                                        <img src={CommentsIcon} alt="" />
                                    </div>
                                    0
                                </div>
                            </div>
                            <div class="project__created">
                                <div className="project__Icon">
                                    <img src={TimeIcon} alt="" />
                                </div>
                                {dayjs(project?.created).format('MMM DD, YYYY')}
                            </div>
                        </div>
                        {comments && (
                            <div class="project__commentsWrap">
                                <Comments
                                    headerValue={commentValue}
                                    onHeaderChange={handleCommentValue}
                                    onHeaderSubmit={commentSubmit}
                                    commentsCount={commentsCount}
                                    handleCommentsCount={handleCommentsCount}
                                    userFrom={usersAdmin[0]}
                                    commentsArray={comments}
                                    answerTo={answerTo}
                                    handleAnswerTo={handleAnswerTo}
                                    answerValue={commentAnswerValue}
                                    onAnswerChange={handleCommentAnswerValue}
                                    onAnswerSubmit={handleCommentAnswer}
                                />
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <div class="aside-container">
                <aside>
                    <div className="project__author">
                        <div className="project__avatar">
                            <img src={author?.avatar} alt={author?.name} />
                        </div>
                        <div class="project__authorData">
                            <div className="project__authtorName">
                                {author?.name}
                            </div>
                            <div className="project__authtorActivity">
                                Online: {dayjs(author?.activity).format('MMM DD, YYYY [at] HH:mm')}
                            </div>
                        </div>
                    </div>
                    <div className="project__options-wrap">
                        <div className="project__option project__option_blue">
                            <div className="project__optionIcon">
                                <img src={EmailIcon} alt="icon" />
                            </div>
                            Write to Author
                        </div>
                        <div className="project__option">
                            <div className="project__optionIcon">
                                <img src={BookmarkIcon} alt="icon" />
                            </div>
                            Add to bookmarks
                        </div>
                        <div className="project__option">
                            <div className="project__optionIcon">
                                <img src={ReportIcon} alt="icon" />
                            </div>
                            Report
                        </div>
                    </div>
                    <div class="project__shareTitle">Share this project</div>
                    <div className="project__share-wrap">
                        <div className="project__share project__share_vk">
                            <a href="#">
                                <img src={VkIcon} alt="vk" />
                            </a>
                        </div>
                        <div className="project__share project__share_x">
                            <a href="#">
                                <img src={TwitterIcon} alt="x" />
                            </a>
                        </div>
                        <div className="project__share project__share_fb">
                            <a href="#">
                                <img src={FbIcon} alt="fb" />
                            </a>
                        </div>
                        <div className="project__share project__share_tg">
                            <a href="#">
                                <img src={TgIcon} alt="tg" />
                            </a>
                        </div>
                        <div className="project__share project__share_whatsapp">
                            <a href="#">
                                <img src={WhatsappIcon} alt="whatsapp" />
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Project;