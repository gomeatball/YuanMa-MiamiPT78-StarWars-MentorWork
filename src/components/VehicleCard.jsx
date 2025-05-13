import { Link  } from "react-router-dom"
const style = {
 width: "18rem",
}
export const VehicleCard = ({ id, name }) => {
    return (
        <>
         <div className="card" style={style}>
                 <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${id}.jpg?raw=true`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                   <Link to={`/vehicle-profile-page/vehicles/${id}`}>
                      <button className="btn btn-primary">Learn More!</button>
                      </Link>
                  </div> 
                </div>
        </>
    )
}