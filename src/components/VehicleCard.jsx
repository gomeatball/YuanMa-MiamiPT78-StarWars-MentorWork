import { Link } from "react-router-dom"
import { useFavorites } from "../hooks/FavoritesContext"
const style = {
    width: "18rem",
}
export const VehicleCard = ({ uid, name }) => {
    const { toggleFavorite, favorites } = useFavorites();
    const isFavorited = favorites.some(
        (item) => item.uid === uid && item.type === 'vehicle'
    )

    return (
        <>
            <div className="card" style={style}>
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${uid}.jpg?raw=true`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex justify-content-between">
                        <Link to={`/vehicle-profile-page/${uid}`}>
                            <button className="btn btn-primary">Learn More!</button>
                        </Link>
                        <button className="heart"
                            onClick={() => toggleFavorite({ uid, name, type: 'vehicle' })}
                              style={{
                backgroundColor: isFavorited ? 'orange' : 'white',
                color: isFavorited ? 'black' : 'inherit',
                border: '1px solid orange',
                borderRadius: '5px',
                padding: '6px',
                cursor: 'pointer',
                transition: 'all 0.3 ease',
              }}
              onMouseEnter={e => {
                if (!isFavorited) {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'
                  // e.target.style.color = 'black';
                }
              }}
              onMouseLeave={e => {
                if (!isFavorited) {
                  e.target.style.backgroundColor = 'white';
                  // e.target.style.color = 'inherit';
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={isFavorited?'currentColor':'orange'} className={isFavorited ? "bi bi-hear-fill" : "bi bi-heart"} viewBox="0 0 16 16">
                <path d={isFavorited
                  ? "M8 1.314C3.562-3.248-7.534 4.735 8 15 23.534 4.736 12.437-3.248 8 1.314z"
                  : "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"}
                />
              </svg>
            </button>
                    </div>
                </div>
            </div>
        </>
    )
}