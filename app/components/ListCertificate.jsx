import Link from "next/link"


const ListCertificate = ({ indexCertificate, valueCertificate, IssuedBy, LinkCertificate }) => {

    return (
        <>
            <ul className="list-disc pl-10 my-2">
                <li className="font-main text-black text-sm">
                    <span className="font-semibold">{indexCertificate} </span>
                    <span>
                        {valueCertificate}
                        {
                            LinkCertificate != "" ? (
                                <Link className="hover:text-blue-500 text-black" href={LinkCertificate}>
                                    <span className="ml-1 underline">({IssuedBy})</span>
                                </Link>
                            ) : (
                                <span className="ml-1">({IssuedBy})</span>
                            )
                        }
                    </span>
                </li>
            </ul>
        </>
    )
}

export default ListCertificate