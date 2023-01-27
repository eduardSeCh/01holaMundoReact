import { Edad } from "./Edad"

export const Mascota = ({name,age}) => {
    return(
        <>
            <h3 className="Juan">Soy una mascota y me llamo {name}</h3>
            <Edad edad={age}/>
        </>
    )
}