import { Wrapper } from "./style";

export default function Contact(){
    return(
        <Wrapper>
           <h1>CONTACT US</h1>
           <form>
            <div>
            <input type="text" placeholder="Your name" />
            </div>
            <div>
            <input type="email" placeholder="Your e-mail" />
            </div>
            <textarea cols="30" rows="10">Type same thing</textarea><br />
            <button>SEND</button>
           </form>
           
        </Wrapper>
    )
}