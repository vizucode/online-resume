
import Link from "next/link"


const ListWork = ({ workAt, LinkWorkAt, WorkDate, Description, JobDeskList }) => {

    return (
        <>
            <div className="flex w-full justify-between">
                {
                    LinkWorkAt != "" ? (
                        <Link className="hover:text-blue-500 font-main font-semibold text-black text-sm" href={LinkWorkAt}>{workAt}</Link>
                    ) : (
                        <p className="font-main font-semibold text-black text-sm">{workAt}</p>
                    )
                }
                <p className="font-main font-semibold text-black text-sm">{WorkDate}</p>
            </div>
            <div>
                <p className="font-main text-sm text-black">{Description}</p>
            </div>
            <ul className="list-disc pl-10 mt-5">
                {
                    JobDeskList.map((item, index) => (
                        <li key={index} className="font-main text-black text-sm my-2">
                            <span className="font-semibold">
                                {item.index}
                            </span>
                            <br />
                            <p className="mt-1">{item.value}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ListWork