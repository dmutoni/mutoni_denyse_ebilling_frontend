

export default function Heading(props){
    return(
        <h1 className={`bold capitalize
        ${props.size ?' text-'+props.size : 'sm'}
        
        `}>{props.title}</h1>
    )
}