import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"




export const PeopleProfilePage = () => {
    const { uid } = useParams();
    const [character, setCharacter] = useState(null)

    useEffect(()=>{
          const fetchCharacter = async() => {
            try { 
                const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
                const data = await response.json();
                setCharacter(data.result.properties)
            } catch (error) {
                console.error("error fetching character", error)
            }
          };
          fetchCharacter();
          
    },[uid])
    if (!character) return <p>Loading...</p>

    return (

        <>
       {character.hair_color}
        </>
    )
}