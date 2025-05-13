import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { fetchAllPeople } from "../lib/fetch"
import { fetchAllPlanets } from "../lib/fetch"
import { fetchAllVehicles } from "../lib/fetch"
import { CharacterCardlist } from "../components/CharacterCardlist"
import { PlanetCardList } from "../components/PlanetCardList"
import { VehicleCardList } from "../components/VehicleCardList"



export const StarWarsLandingPage = () => {

const { store, dispatch } = useGlobalReducer();

useEffect(() => {
fetchAllPeople(dispatch);
fetchAllPlanets(dispatch);
fetchAllVehicles(dispatch)
},[])


    return (
        <>
        <div className="row my-5">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="mt-4 mb-4">
                    <h1 className="text-danger">Characters</h1>
                    <CharacterCardlist 
                    allpeople = {store.allPeople}/>
                </div>

                 <div>
                    <h1 className="text-danger">Planets</h1>
                    <PlanetCardList 
                    allplanets = {store.allPlanets}/>
                </div>

                  <div className="mt-4">
                    <h1 className="text-danger">Vehicles</h1>
                    <VehicleCardList 
                    allvehicles = {store.allVehicles}/>
                </div>
            </div>
            <div className="col-1"></div>
        </div>
        </>
    )
}