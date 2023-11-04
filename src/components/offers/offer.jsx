import OFFER from "../../assets/offer.png"
import { Wrapper } from "./style"
export default function Offer() {
    return (
        <Wrapper className="offer" style={{ backgroundImage: `url(${OFFER})` }}>
            <h1>A BIG <samp>OFFER</samp> FOR THIS SUMMER</h1>
            <p>Non expedita, quaerat ullam optio eius, molestias repellendus voluptatem nemo.</p>
            <button>JOIN US</button>
            
        </Wrapper>
    )
}