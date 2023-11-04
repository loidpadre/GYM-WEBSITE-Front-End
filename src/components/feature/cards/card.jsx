import { Wrapper } from "./style";

export default function Card({title, desc, icon}){
    return(
        <Wrapper>
            {icon} 
            <h3>{title}</h3>
            <p>{desc}</p>
        </Wrapper>
    )
}  