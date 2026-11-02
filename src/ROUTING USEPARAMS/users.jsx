import { Link } from "react-router-dom";

function Users({data}){
    return(
        <div>
            <table style={{borderCollapse:"collapse", border:"2px solid black"}}>
                <thead>
                    <tr style={{borderSpacing:"10px" }}>
                        <th style={{border:"2px black solid"}}>ID</th>
                        <th style={{border:"2px black solid"}}>title</th>
                        <th style={{border:"2px black solid"}}>price</th>
                        <th style={{border:"2px black solid"}}>category</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product)=>(
                        <tr style={{borderSpacing:"10px",border:"2px black solid",padding:"15px"}} key={product.id}>
                            <td style={{border:"2px black solid"}}>{product.id}</td>
                            <td style={{border:"2px black solid"}}>{product.title}</td>
                            <td style={{border:"2px black solid"}}>{product.price}</td>
                            <td style={{border:"2px black solid"}}>{product.category}</td>
                            <Link to={`/products/${product.id}`} style={{border:"2px black solid"}}>View Full Details</Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Users;