import sup from "./api/random-number"
import Container from "./components/Container"

export default function rawr(){
    return(
        <div className="temporary">
            <h1 onClick={sup} className="text-5xl">rawr, XD</h1>
            <Container />
        </div>
    )
}