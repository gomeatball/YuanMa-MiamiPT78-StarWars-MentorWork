import { PlanetCard } from "./PlanetCard"

export const PlanetCardList = ({ allplanets }) => {

    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto mt-4">
                   {
                     allplanets.map(planet => {
                    return (
                       <PlanetCard
                           key={planet.uid}
                           id={planet.uid}
                           name={planet.name}
                       />
                    )
                     })
                   }
           
                   </div>

                 
                 
        </>
    )
}