'use client'
import { PhoneCall } from "@phosphor-icons/react"
import Link from "next/link"

const HeaderItems = ({ icon, value, link }) => {
    return (
        <>
            <div className="flex justify-center items-center gap-2 w-auto font-main text-xs lg:text-sm">
                {icon}
                {
                    link != "" ? (
                        <Link href={link}>
                            <p className="text-blue-500">{value}</p>
                        </Link>
                    ) : (
                        <p>{value}</p>
                    )
                }

            </div>
        </>
    )
}

export default HeaderItems