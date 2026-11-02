import UseFetchApi from "./useFetchApi";
function Users(){
    const {data,loading,error}=UseFetchApi("https://jsonplaceholder.typicode.com/users");
    console.log(data)
    return(
        <div>
            <h1>Users</h1>
            {data.map((user)=>(
                <p key={user.id}>{user.name}</p>
            ))}

        </div>

    )
}
export default Users;