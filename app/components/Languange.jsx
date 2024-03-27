import Link from "next/link"


const Languange = ({ value, LinkLanguange }) => {

    return (
        <>
            <ul className="list-disc pl-10 my-2">
                <li className="font-main text-black text-sm">
                    <span>
                        {
                            LinkLanguange != "" ? (
                                <Link className="hover:text-blue-500 text-black" href={LinkLanguange}>
                                    <span className="ml-1 underline">{value}</span>
                                </Link>
                            ) : (
                                <span className="ml-1">{value}</span>
                            )
                        }
                    </span>
                </li>
            </ul>
        </>
    )
}

export default Languange