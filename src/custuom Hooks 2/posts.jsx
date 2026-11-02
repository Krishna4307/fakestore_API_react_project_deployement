import UseFetchApi from "./useFetchApi";
function Posts(){
    const {data,loading,error}=UseFetchApi("https://jsonplaceholder.typicode.com/posts");
    console.log(data)
    return(
        <div>
            <h1>Posts</h1>
            {data.map((post)=>(
                <p key={post.id}>{post.title}</p>
            ))}

        </div>
    )
}
export default Posts;