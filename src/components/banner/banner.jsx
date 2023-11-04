import BANNER from "../../assets/banner.png"
import Menu from "../menu/menu"
import { Wrapper } from "./styled"
export default function Banner() {
    return (
        <Wrapper className="banner" style={{ backgroundImage: `url(${BANNER})` }}>
            <Menu/>
            <div className="text">
                <h4>Step up your</h4>
                <h1><samp>Fitness</samp> with us</h1>
                <p>Build your and fitness with personal touch</p>
                <button>JOIN US</button>
            </div>
        </Wrapper>
    )
}