import { usersAdmin } from "./adminData";

export const projects = [
    {
        id: 10,
        title: 'Affiliate Online Store - 10',
        description: "Create an online store where customers can buy goods from suppliers",
        text: "Purpose: development of schoolchildren, students in writing scientific articles, in knowledge of the exact science, help in preparing for exams and consultation in exact questions.\n\nThe physicist says - an information portal, a good abstract and many articles containing new ideas. The goal of the project for the next 100 years is to collect interesting articles, develop knowledge of physics, compile the best abstract on theory and practice. Each participant in the project, having written an article, confirms his desire to make new things high-quality, and improve old ones, and therefore gets the opportunity to edit the main summary.\n\nThe user will be able to independently conduct our resource. In general, we plan to divide the theory (articles) of the resource into two feeds: one is an online textbook where there will be verified information, and the second is a “free feed” (sandbox) where users can post their articles, topics of which can be torn off from standard topics like \"mechanics\", \"optics\", etc.\n\nUsers will be given the opportunity to edit / add / delete articles or some piece of text / file in the part of the resource theory, where the verified information will lie, that is, in the online textbook. But in order to approach this, we need to add a system for assessing user knowledge, and specifically this function will be performed by a forum-questionnaire, where a person can get points for an answer, and a sandbox, where any participant has the opportunity to send his article.",
        author: usersAdmin[0],
        comments: [
            {
                user: usersAdmin[1],
                comment: 'Studies in mice have shown that tetrahydrocannabiol affects the olfactory bulb, which is responsible for the senses of taste and smell. Sensitivity to tastes and smells escalates -> you feel them much better -> they provoke an appetite, everything around you seems tastier than it really is.',
                answers: []
            },
        ],
        watched: 128,
        created: '2019-05-17'
    },
    {
        id: 20,
        title: 'Affiliate Online Store - 20',
        description: "Create an online store where customers can buy goods from suppliers",
        text: "Purpose: development of schoolchildren, students in writing scientific articles, in knowledge of the exact science, help in preparing for exams and consultation in exact questions.\n\nThe physicist says - an information portal, a good abstract and many articles containing new ideas. The goal of the project for the next 100 years is to collect interesting articles, develop knowledge of physics, compile the best abstract on theory and practice. Each participant in the project, having written an article, confirms his desire to make new things high-quality, and improve old ones, and therefore gets the opportunity to edit the main summary.\n\nThe user will be able to independently conduct our resource. In general, we plan to divide the theory (articles) of the resource into two feeds: one is an online textbook where there will be verified information, and the second is a “free feed” (sandbox) where users can post their articles, topics of which can be torn off from standard topics like \"mechanics\", \"optics\", etc.\n\nUsers will be given the opportunity to edit / add / delete articles or some piece of text / file in the part of the resource theory, where the verified information will lie, that is, in the online textbook. But in order to approach this, we need to add a system for assessing user knowledge, and specifically this function will be performed by a forum-questionnaire, where a person can get points for an answer, and a sandbox, where any participant has the opportunity to send his article.",
        author: usersAdmin[0],
        comments: [
            {
                user: usersAdmin[1],
                comment: 'Studies in mice have shown that tetrahydrocannabiol affects the olfactory bulb, which is responsible for the senses of taste and smell. Sensitivity to tastes and smells escalates -> you feel them much better -> they provoke an appetite, everything around you seems tastier than it really is.',
                answers: [
                    {
                        user: usersAdmin[2],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: []
                    }
                ]
            },
            {
                user: usersAdmin[2],
                comment: 'Studies in mice have shown that tetrahydrocannabiol affects the olfactory bulb, which is responsible for the senses of taste and smell. Sensitivity to tastes and smells escalates -> you feel them much better -> they provoke an appetite, everything around you seems tastier than it really is.',
                answers: [
                    {
                        user: usersAdmin[2],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: []
                    }
                ]
            },
        ],
        watched: 247,
        created: '2022-05-10'
    },
    {
        id: 30,
        title: 'Affiliate Online Store - 30',
        text: "Purpose: development of schoolchildren, students in writing scientific articles, in knowledge of the exact science, help in preparing for exams and consultation in exact questions.\n\nThe physicist says - an information portal, a good abstract and many articles containing new ideas. The goal of the project for the next 100 years is to collect interesting articles, develop knowledge of physics, compile the best abstract on theory and practice. Each participant in the project, having written an article, confirms his desire to make new things high-quality, and improve old ones, and therefore gets the opportunity to edit the main summary.\n\nThe user will be able to independently conduct our resource. In general, we plan to divide the theory (articles) of the resource into two feeds: one is an online textbook where there will be verified information, and the second is a “free feed” (sandbox) where users can post their articles, topics of which can be torn off from standard topics like \"mechanics\", \"optics\", etc.\n\nUsers will be given the opportunity to edit / add / delete articles or some piece of text / file in the part of the resource theory, where the verified information will lie, that is, in the online textbook. But in order to approach this, we need to add a system for assessing user knowledge, and specifically this function will be performed by a forum-questionnaire, where a person can get points for an answer, and a sandbox, where any participant has the opportunity to send his article.",
        author: usersAdmin[1],
        comments: [
            {
                user: usersAdmin[1],
                comment: 'Studies in mice have shown that tetrahydrocannabiol affects the olfactory bulb, which is responsible for the senses of taste and smell. Sensitivity to tastes and smells escalates -> you feel them much better -> they provoke an appetite, everything around you seems tastier than it really is.',
                answers: []
            },
        ],
        watched: 83,
        created: '2017-01-17'
    },
]