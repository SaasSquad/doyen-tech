import { useState } from "react"
import HeaderLink from "./HeaderLink"

function HeaderList({title, subTitle}) {
    const [openSubnav, setOpenSubnav] = useState(false)

    return (
        <>
            <li className="relative pr-4">
                <div className="flex justify-between">
                    <a href="#" className="hover:text-gray-300" onClick={() => setOpenSubnav(!openSubnav)}>{title}</a>
                    <button className="block md:hidden" onClick={() => setOpenSubnav(!openSubnav)}>drop</button>
                </div>
                <div className={`${openSubnav ? 'block' : 'hidden'} items-center ${openSubnav && 'block'} w-48 md:absolute relative bg-gray-800 text-white py-4 px-2 space-y-2`}>
                    {subTitle.map(title => <HeaderLink key={title} subTitle={title}/>)}
                </div>
            </li>
        </>
    )
}

export default HeaderList