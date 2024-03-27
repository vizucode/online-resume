import { PhoneCall, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import HeaderItems from "./components/HeaderItems";
import ListSkill from "./components/ListSkill";
import ListProject from "./components/ListProject";
import ListWork from "./components/ListWork";
import ListCertificate from "./components/ListCertificate";
import Languange from "./components/Languange";
import { Educations, Projects, SkillSet, WorkExperieces, achivements, certificates, fullname, headerItem, languages, role, summary } from "@/data/data";

export default function Home() {

  return (
    <main className="p-5 lg:p-14">
      {/* Header */}
      <section className="w-full text-center">
        <h1 className="font-main font-medium text-3xl lg:text-[3rem] text-black">{fullname}</h1>
        <p className="my-2 lg:my-5 text-md lg:text-lg font-main">{role}</p>
        <div className="flex w-full flex-wrap lg:flex-row justify-center gap-2 lg:gap-5 mt-2 lg:mt-6">
          {headerItem.map((item, index) => (
            <HeaderItems key={index} icon={item.icon} value={item.value} link={item.link} />
          ))}
        </div>
      </section>
      {/* summary */}
      {
        summary != "" && (
          < section >
            <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">SUMMARY</p>
            <p className="font-main text-sm text-black">{summary}</p>
          </section>
        )
      }

      {/* Technical Skill */}
      {
        SkillSet.length > 0 && (
          <section>
            <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Technical Skill</p>
            {
              SkillSet.map((item, index) => (
                <ListSkill key={index} index={item.index} value={item.value} />
              ))
            }
          </section>
        )
      }

      {/* Project */}
      {
        Projects.length > 0 && (
          <section>
            <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Projects</p>
            {
              Projects.map((item, index) => (
                <ListProject key={index} index={item.index} value={item.value} link={item.link} />
              ))
            }
          </section>
        )
      }

      {/* Work Experience */}
      {
        WorkExperieces.length > 0 && (
          <section>
            <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Work Experiences</p>
            {
              WorkExperieces.map((item, index) => (
                <ListWork key={index} workAt={item.work_at} LinkWorkAt={item.link_work_at} WorkDate={item.work_date} Position={item.position} JobDeskList={item.job_desk_list} />
              ))
            }
          </section>
        )
      }

      {/* Education */}
      {
        Educations.length > 0 && (
          <section>
            <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Education</p>
            {
              Educations.map((item, index) => (
                <ListWork key={index} workAt={item.work_at} LinkWorkAt={item.link_work_at} WorkDate={item.work_date} Position={item.position} JobDeskList={item.job_desk_list} />
              ))
            }
          </section>
        )
      }

      {/* Certification */}
      {
        certificates.length > 0 && (
          <section>
            <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Certification</p>
            {
              certificates.map((item, index) => (
                <ListCertificate key={index} indexCertificate={item.index_certificate} valueCertificate={item.value_certificate} IssuedBy={item.issued_by} LinkCertificate={item.link_certificate} />
              ))
            }
          </section>
        )
      }

      {/* Achivements */}
      {
        achivements.length > 0 && (
          <section>
            <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Achivements</p>
            {
              achivements.map((item, index) => (
                <ListCertificate key={index} indexCertificate={item.index_certificate} valueCertificate={item.value_certificate} IssuedBy={item.issued_by} LinkCertificate={item.link_certificate} />
              ))
            }
          </section>
        )
      }

      {/* Proficiency Languange */}
      {
        languages.length > 0 && (
          <section>
            <p className="font-main text-xl font-medium text-black mt-10 mb-5 uppercase">Proficiency Languange</p>
            {
              languages.map((item, index) => (
                <Languange key={index} LinkLanguange={item.link_languange} value={item.value} />
              ))
            }
          </section>
        )
      }

    </main >
  );
}
