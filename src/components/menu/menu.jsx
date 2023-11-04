import LOGO from "../../assets/logo.png"
import { Wrapper } from "./styled"
export default function Menu() {
    return (
        <Wrapper>
            <div className="logo">
                <img src={LOGO} alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">FEATURES</a></li>
                    <li><a href="#">OFFER</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </Wrapper>
    )
}