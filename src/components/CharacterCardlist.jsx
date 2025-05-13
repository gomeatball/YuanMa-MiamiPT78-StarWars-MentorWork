
import { CharacterCard } from "./CharacterCard"



export const CharacterCardlist = ( {allpeople} ) => {
   
   
   
   
   
    return (

        <>
        <div className="row d-flex flex-nowrap overflow-auto mt-4">
        {
          allpeople.map(person => {
         return (
            <CharacterCard
                key={person.uid}
                id={person.uid}
                name={person.name}
            />
         )
          })
        }

        </div>
        </>
    )
}