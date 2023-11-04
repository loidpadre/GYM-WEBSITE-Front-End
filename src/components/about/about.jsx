import ABOUT from "../../assets/about.png"
import { Wrapper } from "./style"

export default function About(){
    return(
        <Wrapper>
            <img src={ABOUT} alt="About" />
            <div className="text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non totam voluptate natus debitis animi saepe aliquid! Autem cumque aperiam reiciendis vel? Distinctio doloremque odio aut necessitatibus iure nostrum repellat.</p>
                <button>READ MORE</button>
            </div>
        </Wrapper>
    )
}