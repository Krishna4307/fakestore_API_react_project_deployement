import { useParams } from "react-router-dom";
import Users from "./users";
function SingleUser({data}){
    const{id}=useParams();
    const singleuser=data.find((user)=>{return user.id === Number(id)})
    if(!singleuser){
        return <h2>Loading</h2>
    }
    return(
        <div>
            <div>
                <p>id : {singleuser.id}</p>
                <p>Title :{singleuser.title}</p>
                <p>Price : {singleuser.price}</p>
                <p>Category : {singleuser.category}</p>
            </div>
            {console.log(singleuser)}
        </div>
        
    )
}
export default SingleUser;