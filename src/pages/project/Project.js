import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { projects } from "../../data/projectsData";

const Project = () => {
    const Params = useParams();
    const id = Params.id;

    const [projectArr, setProjectArr] = useState({});

    const { project, author } = projectArr;

    useEffect(() => {
        const arr = projects;
        let project = {};

        arr.forEach(el => {
            if (el.id == id) {
                project = el;
            }
        });

        setProjectArr(project);
    }, [Params])

    return (
        <div class="container container_row">
            <div class="container__section">
                <section class="project">
                    <h2 class="project__title">
                        {project?.title}
                    </h2>
                    <p className="description">
                        {project?.description}
                    </p>
                    <div className="content">
                        {project?.text}
                    </div>
                    <div className="project__footer">
                        <div>
                            <div className="project__watched">
                                {projectArr?.watched}
                            </div>
                            <div className="project__commentsCount">
                                0
                            </div>
                        </div>
                        <div class="project__created">
                            {projectArr?.created}
                        </div>
                    </div>
                    <div>
                        *Comments component*
                    </div>
                </section>
            </div>
            <div class="aside-container">
                <aside>
                    <div className="project__authtor">
                        <div className="projetc__avatar">
                            <img src={author?.avatar} alt={author?.name} />
                        </div>
                        <div>
                            <div className="project__authtorName">
                                {author?.name}
                            </div>
                            <div className="project__authtorActivity">
                                {author?.activity}
                            </div>
                        </div>
                    </div>
                    <div className="project__options-wrap">
                        <div className="project__option">
                            <div className="project__optionIcon">
                                <img src="" alt="icon" />
                            </div>
                            Write to Author
                        </div>
                        <div className="project__option">
                            <div className="project__optionIcon">
                                <img src="" alt="icon" />
                            </div>
                            Add to bookmarks
                        </div>
                        <div className="project__option">
                            <div className="project__optionIcon">
                                <img src="" alt="icon" />
                            </div>
                            Report
                        </div>
                    </div>
                    <div className="project__share-wrap">
                        <div className="project__share project__share_vk">
                            <a href="#">
                                <img src="" alt="vk" />
                            </a>
                        </div>
                        <div className="project__share project__share_x">
                            <a href="#">
                                <img src="" alt="x" />
                            </a>
                        </div>
                        <div className="project__share project__share_fb">
                            <a href="#">
                                <img src="" alt="fb" />
                            </a>
                        </div>
                        <div className="project__share project__share_tg">
                            <a href="#">
                                <img src="" alt="tg" />
                            </a>
                        </div>
                        <div className="project__share project__share_whatsapp">
                            <a href="#">
                                <img src="" alt="whatsapp" />
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Project;