import { EnvelopeSimple, GithubLogo, LinkedinLogo, PhoneCall } from "@phosphor-icons/react/dist/ssr";

export const fullname = "Mitsuha Nguyen"
export const role = "(Backend Engineer)"

export const headerItem = [
    {
        icon: <PhoneCall size={16} />,
        value: "0877-0846-6279",
        link: ""
    },
    {
        icon: <EnvelopeSimple size={16} />,
        value: "nguyen.mitsuha@gmail.com",
        link: "mailto:nguyen.mitsuha@gmail.com"
    },
    {
        icon: <GithubLogo size={16} />,
        value: "Github",
        link: "https://github.com/vizucode"
    },
    {
        icon: <LinkedinLogo size={16} />,
        value: "LinkedIn",
        link: "https://www.linkedin.com/in/havis-iqbal/"
    }
]

export const summary = "I have one year of experience in Software Engineering and managed to make software for pharmacy sales. I graduated from an intensive Bootcamp program at Alterra Academy as a Backend Engineer to deepen my knowledge in the field of Backend Engineer, especially in Golang, I create a public service application platform using Golang, and I am developing features such as (login, garbage sales, and purchasing goods) and integrated with Midtrans third-party services for payment interfaces, I hope to be a software engineer who is constantly updated with technology."

export const SkillSet = [
    // {
    //     index: "Programming Languanges",
    //     value: "Go, Javascript, Typescript",
    // },
    // {
    //     index: "Technologies",
    //     value: "Echo, Gin, Laravel, MySQL, Postgres, S3 Bucket, AWS EC2, Cloudflare, Docker, Docker Compose, Github, Gorm, REST API, Redis",
    // },
    // {
    //     index: "Other",
    //     value: "Implementing CI/CD, Microservices, Agile Scrum.",
    // },
]

export const Projects = [
    {
        index: "Rozhok (public service app)",
        value: "Rozhok is a platform, which facilitates waste collectors and the public to make it easier to distribute their waste, as well as a shop feature to buy processed waste products, this project is using Golang and Echo Framework deployed on AWS cloud, more details can be seen at Github.",
        link: "https://github.com/capstone-rozhok-app/backend"
    },
    {
        index: "Open Funding",
        value: "Open-Funding is a service that aims to fund projects ranging from individual and community scale and large, this service is built with Golang, Postgres docker and AWS and integrated with Xendit., which you can see on Github.",
        link: "https://github.com/romodeus/open-funding"
    }
]

export const WorkExperieces = [
    {
        work_at: "Halte Creative",
        link_work_at: "",
        work_date: "2020 - March 2022",
        position: "Fullstack Developer East Java, Tulungagung",
        job_desk_list: [
            {
                index: "Slicing UI",
                value: " Slicing from UI design to the mobile application and integrating the system to the backend with REST API build with React Native. "
            }
        ]
    }
]

export const Educations = [
    {
        work_at: "ALTERRA ACADEMY",
        link_work_at: "https://www.alterra.ac.id/",
        work_date: "August 2022 - October 2022",
        position: "Immersive Program, Backend Engineering Online",
        job_desk_list: [
            {
                index: "Tech Course:",
                value: "Pair Programming, Algorithm and data structure, Git, Github, TBD, MySQL, REST API, Test Driven Development, Deployment, AWS, Docker, Docker Compose, Golang, Echo, Gorm."
            }
        ]
    }
]

export const certificates = [
    {
        index_certificate: "Certificate Of Competence",
        value_certificate: "Software Engineering",
        issued_by: "Issued by BNSP Mei 2022",
        link_certificate: "https://drive.google.com/file/d/1OmOk5yVPzcYbS6YUY_ffEtz2dgm11n4A/view"
    }
]

export const achivements = [
    {
        index_certificate: "NITC",
        value_certificate: "Silver Medal National IT Competition",
        issued_by: "issued by UM Faculty of Engineering Oct 2022",
        link_certificate: "https://drive.google.com/file/d/1OvZqKT3k5r_IPf7FSgXBeQuysyEahos1/view"
    }
]

export const languages = [
    {
        value: "English (Native)",
        link_languange: ""
    }
]