import { PhoneCall, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import HeaderItems from "./components/HeaderItems";
import ListSkill from "./components/ListSkill";

export default function Home() {

  const headerItem = [
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

  const summary = "I have one year of experience in Software Engineering and managed to make software for pharmacy sales. I graduated from an intensive Bootcamp program at Alterra Academy as a Backend Engineer to deepen my knowledge in the field of Backend Engineer, especially in Golang, I create a public service application platform using Golang, and I am developing features such as (login, garbage sales, and purchasing goods) and integrated with Midtrans third-party services for payment interfaces, I hope to be a software engineer who is constantly updated with technology."

  const SkillSet = [
    {
      index: "Programming Languanges",
      value: "Go, Javascript, Typescript",
    },
    {
      index: "Technologies",
      value: "Echo, Gin, Laravel, MySQL, Postgres, S3 Bucket, AWS EC2, Cloudflare, Docker, Docker Compose, Github, Gorm, REST API, Redis",
    },
    {
      index: "Other",
      value: "Implementing CI/CD, Microservices, Agile Scrum.",
    },
  ]

  return (
    <main className="p-5 lg:p-14">
      {/* Header */}
      <section className="w-full text-center">
        <h1 className="font-main font-medium text-3xl lg:text-[3rem] text-black">Mitsuha Nguyen</h1>
        <p className="my-2 lg:my-5 text-md lg:text-lg font-main">(Backend Engineer)</p>
        <div className="flex w-full flex-wrap lg:flex-row justify-center gap-2 lg:gap-5 mt-2 lg:mt-6">
          {headerItem.map((item, index) => (
            <HeaderItems key={index} icon={item.icon} value={item.value} link={item.link} />
          ))}
        </div>
      </section>
      {/* Summary */}
      <section>
        <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">SUMMARY</p>
        <p className="font-main text-sm text-black">{summary}</p>
      </section>
      {/* Technical Skill */}
      <section>
        <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Technical Skill</p>
        {
          SkillSet.map((item, index) => (
            <ListSkill key={index} index={item.index} value={item.value} />
          ))
        }
      </section>
      {/* Project */}
      <section>
        <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Projects</p>
        {
          SkillSet.map((item, index) => (
            <ListSkill key={index} index={item.index} value={item.value} />
          ))
        }
      </section>
    </main>
  );
}
