import { createContext,useContext,useState } from "react";


const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {

const [favorites, setFavorites] = useState([]);


const toggleFavorite = (item) =>{
    setFavorites((prevState) => {
        const exists = prevState.find(fav => fav.uid === item.uid && fav.type === item.type);
      return exists ?
            prevState.filter(fav => !(fav.uid === item.uid && fav.type === item.type)) :
            [...prevState, item];
        
    });
}

   return (
    <>
<FavoritesContext.Provider value={{toggleFavorite, favorites}}>
    {children}
</FavoritesContext.Provider>
    </>
   )
}


export const useFavorites = () => useContext(FavoritesContext);