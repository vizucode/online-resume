

const ListSkill = ({index, value}) => {

    return (
        <>
            <ul className="list-disc pl-10">
                <li className="font-main text-black text-sm">
                    <span className="font-semibold">{index}:</span>
                    {value}
                </li>
            </ul>
        </>
    )
}

export default ListSkill