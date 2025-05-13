export const initialStore=()=>{
  return{
       allPeople: [],
    allPlanets: [],
    allVehicles: [],
    singlePerson: [],
    singlePlanet: [],
    singleVehicle: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
case 'fetchedAllPeople':
  const peopleArray = action.payload;
  return {
    ...store,
    allPeople:[...peopleArray]
  }
 break;
 case 'fetchedAllPlanets':
   const planetsArray = action.payload;
  return {
    ...store,
    allPlanets:[...planetsArray]
  }
 break;
 case 'fetchedAllVehicles':
   const vehiclesArray = action.payload;
  return {
    ...store,
    allVehicles:[...vehiclesArray]
  }
 break;

    default:
      throw Error('Unknown action.');
  }    
}
