import Link from "next/link"


const ListProject = ({index, value, link}) => {

    return (
        <>
            <ul className="list-disc pl-10">
                <li className="font-main text-black text-sm my-2">
                    <span className="font-semibold">
                        {
                            link != "" ? (
                                <Link className="text-blue-500" href={link}>{index}:</Link>
                            ) : 
                            (
                                <span>{index}:</span>
                            )
                        }
                    </span>
                    <br />
                    <p className="mt-1">{value}</p>
                </li>
            </ul>
        </>
    )
}

export default ListProject
