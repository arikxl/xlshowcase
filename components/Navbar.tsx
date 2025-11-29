import Image from 'next/image'

import Time from './Time'
import { navIcons, navList } from '@/data'

const Navbar = () => {
    return (
        <nav className=''>
            <div>
                <Image alt='apple logo' src={'/images/logo.svg'} width={30} height={30} />
                <p className='font-bold'>arikxl</p>
                <ul>
                    {
                        navList.map(({id,title}) => (
                            <li key={id}><p>{title}</p></li>
                        ))
                    }
                </ul>
            </div>

            <div className='font-light text-amber-300'>
                <ul>
                    {
                        navIcons.map(({ id, img }) => (
                            <li key={id} className='icon-hover'>
                                <Image
                                    alt={`icon-${id}`} src={img} width={20} height={20} />
                            </li>
                        ))
                    }
                </ul>

                <Time />
            </div>
        </nav>
    )
}

export default Navbar