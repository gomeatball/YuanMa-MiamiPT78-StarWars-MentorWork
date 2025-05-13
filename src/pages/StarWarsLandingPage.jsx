import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { fetchAllPeople } from "../lib/fetch"
import { fetchAllPlanets } from "../lib/fetch"
import { fetchAllVehicles } from "../lib/fetch"
import { CharacterCardlist } from "../components/CharacterCardlist"



export const StarWarsLandingPage = () => {

const { store, dispatch } = useGlobalReducer();

useEffect(() => {
fetchAllPeople(dispatch);
// fetchAllPlanets(dispatch);
// fetchAllVehicles(dispatch)
},[])


    return (
        <>
        <div className="row my-5">
            <div className="col-1"></div>
            <div className="col-10">
                <div>
                    <h1>Characters</h1>
                    <CharacterCardlist 
                    allpeople = {store.allPeople}/>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
        </>
    )
}