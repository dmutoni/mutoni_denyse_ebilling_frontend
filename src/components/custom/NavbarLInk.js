import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

export default function NavbarLInk(props) {
    const router = useHistory()
    return (

         
        <div className=" cursor-pointer flex items-center gap-2 hover:bg-orange-400 rounded p-2 "
        onClick={()=>router.push(props.path)}
        >
       {props.icon}
        <Link href={props.path}>
            
            <a
                className={`bold capitalize
        ${props.size ? ' text-' + props.size : 'sm'}
        
        `}
            >
                {props.title}{' '}
            </a>
        </Link>
    </div>

        
    )
}
