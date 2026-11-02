
import React from "react";
// import { useState } from "react";
import "./app.css"
import Interstellar from "./assets/interstealler.jpg";
import animal from "./assets/animal.jpg";
import avatar from "./assets/avatar.webp";
import batman from "./assets/batman.jpg";
import inception from "./assets/inception.jpg";
import jawaan from "./assets/jawaan.jpeg";
import kalki from "./assets/kalki.webp";
import kgf from "./assets/kgf.webp";
import leo from "./assets/leo.jpg";
import pushpa2 from "./assets/pushpa2.webp";
import rrr from "./assets/rrr.jpg";
import salaar from "./assets/salaar.avif";
import smartWatch from "./assets/smartwatch.jpg";
// import HeaderComponent from "./header.jsx";
import Students from "./students _component.jsx";
import Movies from "./Movies_component.jsx";
import FoodItems from "./food_component.jsx";
import TestEffect from "./useeffect tasks/useeffect_basic_level_tasks.jsx";
// import UserProfile from "./UseState tasks examples/usestate.jsx";

// function NetflixMovieGallery(){
//     const movies = [
//         {id: 1,title: "Interstellar",genre: "Sci-Fi",year: 2014,rating: 9.1,language: "English",duration: "2h 49m",image:Interstellar},
//         {id: 2,title: "Avatar",genre: "Action",year: 2009,rating: 7.8,language: "English",duration: "2h 42m",image:avatar},
//         {id: 3,title: "Jawan",genre: "Action",year: 2023,rating: 7.4,language: "Hindi",duration: "2h 49m",image: jawaan},
//         {id: 4,title: "Pushpa",genre: "Action",year: 2021,rating: 7.6,language: "Telugu",duration: "2h 59m",image:pushpa2},
//         {id: 5,title: "RRR",genre: "Action",year: 2022,rating: 8.2,language: "Telugu",duration: "3h 7m",image: rrr},
//         {id: 6,title: "The Batman",genre: "Action",year: 2022,rating: 8.0,language: "English",duration: "2h 56m",image:batman },
//         {id: 7,title: "KGF Chapter 2",genre: "Action",year: 2022,rating: 8.3,language: "Kannada",duration: "2h 48m",image: kgf},
//         {id: 8,title: "Leo",genre: "Action",year: 2023,rating: 7.2,language: "Tamil",duration: "2h 44m",image: leo},
//         {id: 9,title: "Inception",genre: "Sci-Fi",year: 2010,rating: 8.8,language: "English",duration: "2h 28m",image: inception},
//         {id: 10,title: "Salaar",genre: "Action",year: 2023,rating: 6.9,language: "Telugu",duration: "2h 55m",image: salaar},
//         {id: 11,title: "Kalki 2898 AD",genre: "Sci-Fi",year: 2024,rating: 8.5,language: "Telugu",duration: "3h 1m",image: kalki},
//         {id: 12,title: "Animal",genre: "Crime",year: 2023,rating: 6.5,language: "Hindi",duration: "3h 21m",image: animal}
//     ];
    
//     let finalRating='';
//     let languageClass=''
//     return(
//         <>

//             <HeaderComponent></HeaderComponent>
//             <div id="movies-list-container">
//                 {movies.map((movie)=>{
//                     if(movie.rating>=8.5){
//                         finalRating ="BlockBuster🔥"
//                     }
//                     else if(movie.rating>=7){
//                         finalRating = "⭐Recomended"
//                     }
//                     else{
//                         finalRating = "Average"
//                     }
//                     if(movie.language==="Hindi"){
//                         languageClass="hindi"
//                     }
//                     else if(movie.language==="English"){
//                         languageClass="english"
//                     }
//                     else if(movie.language==="Telugu"){
//                         languageClass="telugu"
//                     }
//                     else{
//                         languageClass="other"
//                     }
//                     return(
//                     <div className="movie-div">
                            
//                         <img src={movie.image} width="300px" height="250px"/>
//                         <h1>{movie.title}<p className={languageClass}></p></h1>
//                         <h3><span style={{fontWeight:"200"}}>Genre : </span> {movie.genre}</h3>
//                         <h3><span style={{fontWeight:"200"}}>Released Year : </span>{movie.year}</h3>
//                         <h3><span style={{fontWeight:"200"}}>Duration : </span>{movie.duration}</h3>
//                         <h3><span style={{fontWeight:"200"}}>language : </span>{movie.language}</h3>
//                         <h3>{movie.rating}</h3>
//                         <h2><span style={{fontWeight:"300"}}>Verdict : </span>{finalRating}</h2>
//                         <h1>{movie.year > 2022 ? " 🆕New Release" : "🎬 Classic"}</h1>
//                     </div>
                        
//                     );
//                 })} 
//             </div> 
//         </>
//     )
// }
// export default NetflixMovieGallery;


// function App(){
//     const students = [
//     {id: 1,name: "Rahul Sharma",rollNo: "22CSE101",branch: "CSE",year: "3rd Year",cgpa: 8.9,image: "https://picsum.photos/200?1"},
//     {id: 2,name: "Anjali Reddy",rollNo: "22ECE102",branch: "ECE",year: "2nd Year",cgpa: 8.5,image: "https://picsum.photos/200?2"},
//     {id: 3,name: "Kiran Kumar",rollNo: "22EEE103",branch: "EEE",year: "4th Year",cgpa: 9.2,image: "https://picsum.photos/200?3"},
//     {id: 4,name: "Priya Singh",rollNo: "22IT104",branch: "IT",year: "3rd Year",cgpa: 8.1,image: "https://picsum.photos/200?4"},
//     {id: 5,name: "Rohit Verma",rollNo: "22ME105",branch: "Mechanical",year: "2nd Year",cgpa: 7.8,image: "https://picsum.photos/200?5"}
//     ];
//     return(
//         students.map((s)=>{
//             return(
//                 <Students name={s.name} rollno={s.rollNo} branch ={s.year} year={s.year} cgpa={s.cgpa} image={s.image}/>
//             )
//         })
//     )
// }
// export default App;


// function App(){
//     const movies = [
//   {
//     id: 1,
//     title: "Interstellar",
//     genre: "Sci-Fi",
//     language: "English",
//     year: 2014,
//     rating: 9.1,
//     duration: "2h 49m",
//     image: "https://picsum.photos/250?21"
//   },
//   {
//     id: 2,
//     title: "RRR",
//     genre: "Action",
//     language: "Telugu",
//     year: 2022,
//     rating: 8.3,
//     duration: "3h 07m",
//     image: "https://picsum.photos/250?22"
//   },
//   {
//     id: 3,
//     title: "Animal",
//     genre: "Crime",
//     language: "Hindi",
//     year: 2023,
//     rating: 6.8,
//     duration: "3h 21m",
//     image: "https://picsum.photos/250?23"
//   }
// ];
// return(
//     movies.map((movie)=>{
//         return(
//             <Movies  poster={movie.image} title={movie.title} year={movie.year} rating={movie.rating}/>
//         )
//     })
// )
// }
// export default App;

// function App(){
//     const restaurants = [
//   {
//     id: 1,
//     name: "Paradise",
//     location: "Hyderabad",
//     rating: 4.6,
//     deliveryTime: "30 mins",
//     cuisine: "Biryani",
//     image: "https://picsum.photos/200?41"
//   },
//   {
//     id: 2,
//     name: "Mehfil",
//     location: "Vijayawada",
//     rating: 4.3,
//     deliveryTime: "25 mins",
//     cuisine: "North Indian",
//     image: "https://picsum.photos/200?42"
//   },
//   {
//     id: 3,
//     name: "KFC",
//     location: "Guntur",
//     rating: 4.4,
//     deliveryTime: "20 mins",
//     cuisine: "Fast Food",
//     image: "https://picsum.photos/200?43"
//   }
// ];
// return(
//     restaurants.map((item)=>{
//         return(
//             <FoodItems name={item.name} location={item.location} rating={item.rating} type={item.cuisine} poster={item.image}/>
//         )
//     })
// )
// }
// export default App;

// import HeaderComponent from "./E-commerce_Homepage/header_component.jsx";
// import Parent from "./E-commerce_Homepage/parent_component.jsx";
// import FeaturedProducts from "./E-commerce_Homepage/featuredProducts.jsx";
// function App(){
//     return(
//         <div>
//             <HeaderComponent/>
//             <Parent/>
//         </div>
//     )
// }
// export default App;

// import HeaderComponent from "./University Management Dashboard/header_component.jsx";
// import SidebarComponent from "./University Management Dashboard/sidebar_component.jsx";
// import ParentComponent from "./University Management Dashboard/parent_component.jsx";
// import FooterComponent from "./E-commerce_Homepage/footer_component.jsx";
// function App(){
//     return(
//         <div id="main-container">
//             <HeaderComponent/>
//             <SidebarComponent/>
//             <ParentComponent/>
//             <FooterComponent/>
//         </div>
//     )
// }
// export default App;

// ======================================================================================
//                         Basic Level Tasks
// ======================================================================================

// function App(){
//     let[counter,setCounter]=useState(0);
//     return(
//         <div>
//             <button onClick={()=>{
//                 setCounter(counter+1);
//             }}> + </button>
//             <h1>{counter}</h1>
//             <button onClick={()=>{
//                 setCounter(counter-1);
//             }}> - </button>
//         </div>
//     )
// }
// export default App;


// function App(){
//     let[message,setMessage]=useState(false);
//     return(
//         <>
//             {message ? <button onClick={()=>{setMessage(!message)}}>Hide Message</button> : <button onClick={()=>{setMessage(!message)}}>Show Message</button>}
//             {message ? <p>Hello React</p> : ""}
//         </>
//     )
// }
// export default App;

// import UserProfile from "./UseState tasks examples/usestate.jsx";
// function App(){
//     let users=[{
//         name:"Rahul",
//         age:22,
//         role:"Frontend Developer",
//         city:"Hyderabad"
//     }];
//     return(
//         users.map((user)=>{
//             return(
//                 <UserProfile {...user}/>
//             )
//         })
//     )
// }
// export default App;
// 

// function App(){
//     const users=["Krishna", "Rahul", "Keerthi"]
//     return(
//         users.map((user)=>{
//             return(
//                 <h1>Hello ,{user}!  </h1>
//             )
//         })
//     )
// }
// export default App;

// function App(){
//     const[message,setMessage]=useState(false);
//     return(
//         <>
//             {message ? <p>Youre Logged Out</p> : <p>Welcome, User</p>}
//             {message ? <button onClick={()=>(setMessage(!message))}>Login</button> : <button onClick={()=>(setMessage(!message))}>Logout</button>}        
//         </>
//     )
// }
// export default App;

// function App(){
//     let products=[
//         {name:"Wireless Mouse" , price:350, category:"Electronics" , availble:false}
//     ];
//     const[button,setButton]=useState('Add to Cart');
//     return(
//         <>
//             {products.map((product)=>(
//                 <div>
//                     <p>{product.name}</p>
//                     <p>{product.price}</p>
//                     <p>{product.category}</p>
//                     <p>{product.availble ? "Availble" : "Out of Stock"}</p>
//                     <button onClick={()=>{setButton("Added")}}>{button}</button>
//                 </div>
//             ))}
//         </>
//     )
// }
// export default App;

// import Profile from "./UseState tasks examples/usestate.jsx";
// function App(){
//     let profile=[
//         {name:"Krishna", age:23, role:"Frontend Developer",city:"Hyderabad"}
//     ];
//     const[details,setDetails]=useState(false);
//     return(
//         profile.map((user)=>{
//             return(
//                 <Profile {...user}
//                     details={details}
//                     setDetails={setDetails}
//                 />
//             );
//         })
//     )
// }
// export default App;

// function App(){
//     const[temprature,setTemprature]=useState(20);
//     return(
//         <>
//             {temprature}&deg;C
//             {temprature>30 ? <h4>It's Hot</h4> : <h4>Normal Temprature</h4>}
//             <br></br>
//             <button onClick={()=>(setTemprature(temprature+1))}>Increase</button>
//             <button onClick={()=>(setTemprature(temprature-1))}>Decrease</button>
//             <button onClick={()=>(setTemprature(20))}>Reset</button>

//         </>
//     )
// }
// export default App;

// import StudentCard from "./UseState tasks examples/usestate.jsx";
// function App(){
//     let students=[
//         {
//         name:"kitty",
//         age:24,
//         course:"MERN",
//         marks:72,
//         staus:true
//         }
//     ];
//     const [show,setShow]=useState(false);
//     return(
//         students.map((student)=>{
//             return(
//                 <>
//                     <StudentCard {...student} show={show} setShow={setShow}/>
//                 </>
//             )
//         })
//     )
// }
// export default App;

// import ProductsList from "./UseState tasks examples/usestate.jsx";
// function App(){
//     let products=[{name:"smart Watch",price:2500,stock:2}];
//     const[cart,setCart]=useState("add to Cart");
//     return(
//         products.map((product)=>(
//             <ProductsList {...product} cart={cart} setCart={setCart}/>
//         ))
//     )
// }
// export default App;


// import AccountCard from "./UseState tasks examples/usestate.jsx";
// function App(){
//     let accounts=[{name:"Krish" , email : "Krishna@gmail.com" , accountType:"free"}];
//     const[view,setView]=useState(false);
//     return(
//         accounts.map((account)=>(
//             <>
//                 <AccountCard {...account} view={view} setView={setView}/>
//             </>
//         ))
    
//     )
// }
// export default App;

// function App(){
//     const students = [
//         {id: 1,name: "Rahul",age: 21,course: "JavaScript"},
//         {id: 2,name: "Priya",age: 22,course: "React"}
//     ];
//     const[data,setData]=useState(students);
//     const[name,setName]=useState('');
//     const[age,setAge]=useState('');
//     const[course,setCourse]=useState('');
//     function handleSubmitData(e){
//         e.preventDefault();
//         let newData={
//             id:data.length+1,
//             name:name==="" || name.includes(" ")?alert("name must be enter") :name,
//             age:age==="" || age.includes(" ")?alert("age must be enter") : Number(age),
//             course:course===""||course.includes(" ")?alert("course must be enter") :course
//         }
//         setData([...data,newData])
//         setName('');
//         setAge('');
//         setCourse('');
//         console.log(newData)
//     }

//     return(
//         <>
//             <form onSubmit={handleSubmitData}>
//                 <input type="text" value={name} placeholder="Enter a name" onChange={(e)=>setName(e.target.value)}/>
//                 <input type="text" value={age} placeholder="Enter a Age" onChange={(e)=>setAge(e.target.value)}/>
//                 <input type="text" value={course} placeholder="Enter Course name" onChange={(e)=>setCourse(e.target.value)}/>
//                 <button type="submit">Submit</button>
//             </form>
            
//             {data.map((s)=>(
//                 <>
//                     <p>{s.name}</p>
//                     <p>{s.age}</p>
//                     <p>{s.course}</p>
//                 </>
//             ))}
            
            
//         </>
        
//     )
// }
// export default App;

// function App(){
//     const products = [
//         {id: 1,name: "Wireless Mouse",price: 799,category: "Electronics"},
//         {id: 2,name: "Keyboard",price: 1299,category: "Electronics"}
//     ];
//     const[productData,setProductData]=useState(products);
//     const[name,setName]=useState('');
//     const[price,setPrice]=useState('');
//     const[category,setCategory]=useState('');
//     function HandleSubmitData(e){
//        e.preventDefault();
//        let newProductData={
//         id:productData.length+1,
//         name:name,
//         price:price,
//         category:category
//        };
//        setProductData([...productData,newProductData])
//        alert("Item Added Successfully");
//        setName("")
//        setPrice("")
//        setCategory("")

//     }
//     return(
//         <>
//             <form onSubmit={HandleSubmitData}>
//                 <input type="text" value={name} placeholder="Enter product Name" onChange={(e)=>{(setName(e.target.value))}}/>
//                 <input type="text" value={price} placeholder="Enter product prcie" onChange={(e)=>{(setPrice(e.target.value))}}/>
//                 <input type="text" value={category} placeholder="Enter product category" onChange={(e)=>{(setCategory(e.target.value))}}/>
//                 <button type="submit">Submit</button>
//             </form>
//             {productData.map((product)=>(
//                 <div>
//                     <p>{product.name}</p>
//                     <p>{product.price}</p>
//                     <p>{product.category}</p>
//                 </div>
//             ))}
//         </>
//     )
// }
// export default App;

// function App(){
//    let employees= {id: 1,name: "Arjun",role: "Frontend Developer",department: "IT",salary: 45000};
//    let [employeeData,setEmployeeData]=useState([employees]);
//    const [name,setName]=useState("");
//    const [role,setRole]=useState("");
//    const [department,setDepartment]=useState("");
//    const [salary,setSalary]=useState("");
//    function HandleSubmitData(e){
//     e.preventDefault();
//     let newEmployee={
//         name:name,
//         role:role,
//         department:department,
//         salary:salary
//     }
//     setEmployeeData([...employeeData,newEmployee]);
//    }
   
//    return(
//     <>
//         <form onSubmit={HandleSubmitData}>
//             <input type="text" value={name} placeholder="Enter Employee Name" onChange={(e)=>{(setName(e.target.value))}}/>
//             <input type="text" value={role} placeholder="Enter Employee Role" onChange={(e)=>{(setRole(e.target.value))}}/>
//             <input type="text" value={department} placeholder="Enter Employee Department" onChange={(e)=>{(setDepartment(e.target.value))}}/>
//             <input type="text" value={salary} placeholder="Enter Employee salary" onChange={(e)=>{(setSalary(e.target.value))}}/>
//             <button type="submit">Submit</button>
//         </form>
//         {employeeData.map((emp)=>(
//             <>
//                 <p>{emp.name}</p>
//                 <p>{emp.role}</p>
//                 <p>{emp.department}</p>
//                 <p>{emp.salary}</p>
//             </>
//         ))}
//     </>
//    )
// }
// export default App;

// function App(){
//     const contacts = [
//         {id: 1,name: "Rahul",phone: "9876543210",email: "rahul@gmail.com"},
//         {id: 2,name: "Priya",phone: "9123456780",email: "priya@gmail.com"}
//     ];
//     const[data,setData]=useState(contacts);
//     const[name,setName]=useState("");
//     const[phone,setPhone]=useState("");
//     const[email,setEmail]=useState("");
//     function HandleSubmitData(e){
//         e.preventDefault();
//         let newData={
//             name:name,
//             phone:phone,
//             email:email
//         }
//         setData([...data,newData])
//         setEmail("");
//         setName("");
//         setPhone("");
//     }
//     return(
//         <>
//             <form onSubmit={HandleSubmitData}>
//                 <input type="text" value={name} placeholder="Enter Name" onChange={(e)=>(setName(e.target.value))}/>
//                 <input type="tel" value={phone} placeholder="Enter Contact Number" minLength="10" onChange={(e)=>(setPhone(e.target.value))}/>
//                 <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>(setEmail(e.target.value))}/>
//                 <button type="submit">Submit</button>
//             </form>
//             {data.map((c)=>(
//                 <>
//                     <p>{c.name}</p>
//                     <p>{c.phone}</p>
//                     <p>{c.email}</p>
//                 </>
//             ))}
//         </>
//     )
// }
// export default App;

// function App(){
//     const books = [
//         {id: 1,title: "JavaScript Basics",author: "John",category: "Programming"},
//         {id: 2,title: "React Guide",author: "David",category: "Programming"}
//     ];
//     const[data,setData]=useState(books);
//     const[title,setTitle]=useState("");
//     const[author,setAuthor]=useState("");
//     const[category,setCategory]=useState("");
//     function HandleSubmitData(e){
//         e.preventDefault();
//         let newBookData={
//             title:title,
//             author:author,
//             category:category
//         }
//         setData([...data,newBookData])
//         setAuthor('');
//         setTitle('');
//         setCategory('');
//     }
//     return(
//         <>
//             <form onSubmit={HandleSubmitData}>
//                 <input type="text" value={title} placeholder="Enter Book Name" onChange={(e)=>(setTitle(e.target.value))}/>
//                 <input type="text" value={author} placeholder="Enter Author Name" onChange={(e)=>(setAuthor(e.target.value))}/>
//                 <input type="text" value={category} placeholder="Enter Book Category" onChange={(e)=>(setCategory(e.target.value))}/>
//                 <button type="submit">Submit</button>
//             </form>
//             {data.map((book)=>(
//                 <div style={{border:"2px solid black" ,margin:"10px"}}>
//                     <p>{book.title}</p>
//                     <p>{book.author}</p>
//                     <p>{book.category}</p>
//                 </div>
//             ))}
//         </>
//     )
// }
// export default App;

// import StudentsForm from "./students management form/students_form.jsx";
// import StudentsList from "./students management form/students_list.jsx";
// function App(){
//     const students = [
//         {id: 1,name: "Rahul",age: 21,course: "React",marks: 85},
//         {id: 2,name: "Priya",age: 20,course: "JavaScript",marks: 35}
//     ];
//     const[studentData,setStudentData]=useState(students)
//     return(
//         <>
//             <StudentsForm setStudentData={setStudentData}/>
//             <StudentsList studentData={studentData}/>
//         </>
//     )
// }
// export default App;


// import ProductForm from "./shopping cart product form/productForm.jsx";
// import ProductList from "./shopping cart product form/productList.jsx";
// function App(){
//     const products = [
//         {id: 1,name: "Laptop",price: 55000,category: "Electronics",stock: 5},
//         {id: 2,name: "Headphones",price: 2000,category: "Accessories",stock: 0}
//     ];
//     const[productData,setProductData]=useState(products);
//     return(
//         <>
//             <ProductForm setProductData={setProductData}/>
//             <ProductList productData={productData}/>
//         </>
//     )
// }
// export default App;



// import EmployeeForm from "./employee registration Dashboard/employeeForm.jsx";
// import EmployeeList from "./employee registration Dashboard/employeeList.jsx";
// function App(){
//     const employees = [
//         {id: 1,name: "Ravi",role: "Frontend Developer",department: "IT",experience: 2},
//         {id: 2,name: "Sneha",role: "HR Manager",department: "HR",experience: 5}
//     ];
//     const[data,setData]=useState(employees);
//     return(
//         <>
//             <EmployeeForm setData={setData}/>
//             <EmployeeList Data={data}/>        
//         </>
//     )
// }
// export default App;

// import GetDrinksData from "./useeffect tasks/useeffect_basic_level_tasks.jsx";
// function App(){
//     return(
//         <GetDrinksData/>
//     )
// }
// export default App;

// function App() {
//   const name = "Ravi";
//   const age = 22;

//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <p>Age: {age}</p>
//       <p>Welcome to React</p>
//     </div>
//   );
// }

// export default App;

// function User() {
//   return (
//     <div>
//       <h2>User Details</h2>
//       <p>Name: Ravi</p>
//       <p>Age: 22</p>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <User/>
//     </div>
//   );
// }

// export default App;

// function User(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <User name="Ravi" age={22} />
//       <User name="Kiran" age={24} />
//     </div>
//   );
// }

// export default App;

// function User(props) {
//   return (
//     <div>
//       <h2>{props.isLoggedIn ? "Welcome User" : "Please Login"}</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <User isLoggedIn={false} />
//     </div>
//   );
// }

// export default App;


// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count+1);
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//     </div>
//   );
// }

// export default App;



// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function handleLogin() {
//     setIsLoggedIn(!isLoggedIn);
//   }

//   return (
//     <div>
//       <h1>{isLoggedIn ? "LoggedIn" : "LoggedOut"}</h1>

//       <button onClick={handleLogin}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     </div>
//   );
// }

// export default App;

// function Counter(props) {
//   const [count, setCount] = useState(props.initialCount);

//   function increase() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// }

// function App() {
//   return <Counter initialCount={10} />;
// }

// export default App;

// function Product(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>

//       {props.stock > 0 && <p>Product Available</p>}
//       {props.stock <= 0 && <p>Out of Stock</p>}
//     </div>
//   );
// }

// function App() {
//   return <Product name="Laptop" stock={0} />;
// }

// export default App;


// function App() {
//   const [showMessage, setShowMessage] = useState(false);

//   function handleClick() {
//     setShowMessage(!showMessage);
//   }

//   return (
//     <div>
//       {showMessage && <h2>Hello React</h2>}

//       {!showMessage && <h2>No message</h2>}

//       <button onClick={handleClick}>Change</button>
//     </div>
//   );
// }

// export default App;


// function Student(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>

//       {props.isPresent ? (
//         <p>Student is Present</p>
//       ) : (
//         <p>Student is Absent</p>
//       )}
//     </div>
//   );
// }

// function App() {
//   const [isPresent, setIsPresent] = useState(false);

//   function changeStatus() {
//     setIsPresent(!isPresent);
//   }

//   return (
//     <div>
//       <h1>Student Attendance</h1>

//       <Student
//         name="Ravi"
//         isPresent={isPresent}
//       />

//       <button onClick={changeStatus}>
//         Change Attendance
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Student(props) {
//   const [present, setPresent] = useState(props.status);

//   function changeStatus() {
//     setPresent(!present);
//   }

//   return (
//     <div>
//       <h2>{props.name}</h2>

//       {present ? (
//         <p>Status: Present</p>
//       ) : (
//         <p>Status: Absent</p>
//       )}

//       <button onClick={changeStatus}>
//         {present ? "Mark Absent" : "Mark Present"}
//       </button>

//       {props.isTopper && <p>Top Performer</p>}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Attendance</h1>

//       <Student
//         name="Ravi"
//         status={false}
//         isTopper={true}
//       />

//       <Student
//         name="Kiran"
//         status={true}
//         isTopper={false}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Product(props) {
//   const [stock, setStock] = useState(props.stock);

//   function decreaseStock() {
//     setStock(stock-1);
//   }

//   function increaseStock() {
//     setStock(stock+1);
//   }

//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Price: ₹{props.price}</p>

//       {stock > 0 ? (
//         <p>In Stock: {stock}</p>
//       ) : (
//         <p>Out of Stock</p>
//       )}

//       <button onClick={decreaseStock}>Buy</button>
//       <button onClick={increaseStock}>Add Stock</button>

//       {stock === 0 && <p>Currently unavailable</p>}
//       {props.featured && <p>Featured Product</p>}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <Product
//         name="Laptop"
//         price={50000}
//         stock={3}
//         featured={true}
//       />

//       <Product
//         name="Mouse"
//         price={800}
//         stock={0}
//         featured={false}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Profile(props) {
//   const [loggedIn, setLoggedIn] = useState(props.loggedIn);

//   function handleLogin() {
//     setLoggedIn(!loggedIn);
//   }

//   function handleLogout() {
//     setLoggedIn(!loggedIn);
//   }

//   return (
//     <div>
//       <h2>{props.name}</h2>

//       {loggedIn && (
//         <div>
//           <p>Email: {props.email}</p>
//           <p>Role: {props.role}</p>
//         </div>
//       )}

//       {!loggedIn && <p>Please login to view profile</p>}

//       {loggedIn ? (
//         <button onClick={handleLogin}>Logout</button>
//       ) : (
//         <button onClick={handleLogout}>Login</button>
//       )}

//       {props.premium && <p>Premium Member</p>}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>User Profiles</h1>

//       <Profile
//         name="Ravi"
//         email="ravi@gmail.com"
//         role="Developer"
//         loggedIn={false}
//         premium={true}
//       />

//       <Profile
//         name="Kiran"
//         email="kiran@gmail.com"
//         role="Designer"
//         loggedIn={true}
//         premium={false}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Movie(props) {
//   const [watched, setWatched] = useState(props.watched);

//   function toggleWatched() {
//     setWatched(!watched);
//   }

//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>Genre: {props.genre}</p>

//       {watched ? (
//         <p>Watched</p>
//       ) : (
//         <p>Not Watched</p>
//       )}

//       <button onClick={toggleWatched}>
//         {watched ? "Mark Unwatched" : "Mark Watched"}
//       </button>

//       {props.favorite && <p>⭐ Favorite Movie</p>}

//       {watched && props.rating > 8 && (
//         <p>Highly Rated & Watched</p>
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>My Watchlist</h1>

//       <Movie
//         title="Inception"
//         genre="Sci-Fi"
//         watched={false}
//         favorite={true}
//         rating={8.8}
//       />

//       <Movie
//         title="Interstellar"
//         genre="Sci-Fi"
//         watched={true}
//         favorite={false}
//         rating={8.6}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function CartItem(props) {
//   const [quantity, setQuantity] = useState(props.quantity);

//   function addItem() {
//     setQuantity(quantity + 1);
//   }

//   function removeItem() {
//     setQuantity(quantity - 1);
//   }

//   function clearItem() {
//     setQuantity(0);
//   }

//   return (
//     <div>
//       <h2>{props.name}</h2>

//       <p>Price: ₹{props.price}</p>

//       {quantity > 0 ? (
//         <p>Quantity: {quantity}</p>
//       ) : (
//         <p>Item Removed</p>
//       )}

//       <button onClick={addItem}>+</button>
//       <button onClick={removeItem}>-</button>
//       <button onClick={clearItem}>Remove</button>

//       {quantity > 0 && (
//         <p>Total: ₹{props.price * quantity}</p>
//       )}

//       {props.discount && quantity > 0 && (
//         <p>Discount Available</p>
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Shopping Cart</h1>

//       <CartItem
//         name="Keyboard"
//         price={1200}
//         quantity={2}
//         discount={true}
//       />

//       <CartItem
//         name="Headphones"
//         price={2000}
//         quantity={1}
//         discount={false}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Course(props) {
//   const [enrolled, setEnrolled] = useState(props.enrolled);
//   const [seats, setSeats] = useState(props.seats);

//   function handleEnrollment() {
//     if (seats > 0) {
//       setEnrolled(!enrolled);
//       setSeats(seats - 1);
//     }
//   }

//   function handleCancel() {
//     setEnrolled(!enrolled);
//   }

//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>Instructor: {props.instructor}</p>

//       {seats > 0 ? (
//         <p>Seats Available: {seats}</p>
//       ) : (
//         <p>No Seats Available</p>
//       )}

//       {enrolled ? (
//         <p>Enrollment Status: Enrolled</p>
//       ) : (
//         <p>Enrollment Status: Not Enrolled</p>
//       )}

//       {enrolled ? (
//         <button onClick={handleEnrollment}>Cancel Enrollment</button>
//       ) : (
//         <button onClick={handleCancel}>Enroll</button>
//       )}

//       {props.premium && <p>Premium Course</p>}
//       {seats === 0 && !enrolled && (
//         <p>Enrollment Closed</p>
//       )}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Available Courses</h1>

//       <Course
//         title="React Development"
//         instructor="John"
//         seats={2}
//         enrolled={false}
//         premium={true}
//       />

//       <Course
//         title="JavaScript Basics"
//         instructor="David"
//         seats={0}
//         enrolled={false}
//         premium={false}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Book(props) {
//   const [borrowed, setBorrowed] = useState(props.borrowed);
//   const [copies, setCopies] = useState(props.copies);

//   function handleBorrow() {
//     if (copies > 0) {
//       setBorrowed(true);
//       setCopies(copies + 1);
//       return;
//     }
//   }

//   function handleReturn() {
//     setBorrowed(false);
//     setCopies(copies - 1);
//     return;
//   }

//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>Author: {props.author}</p>

//       {borrowed ? (
//         <p>Status: Available</p>



//       ) : (
//         <p>Status: Borrowed</p>
//       )}

//       {copies > 0 ? (
//         <p>Available Copies: {copies}</p>
//       ) : (
//         <p>No Copies Available</p>
//       )}

//       {borrowed ? (
//         <button onClick={handleBorrow}>Return Book</button>
//       ) : (
//         <button onClick={handleReturn}>Borrow Book</button>
//       )}

//       {props.premium && <p>Premium Collection</p>}

//       {copies === 0 && !borrowed && (
//         <p>Currently Unavailable</p>
//       )}
//     </div>
//   );
// }

// function Library(props) {
//   return (
//     <div>
//       <h1>{props.libraryName}</h1>

//       <Book
//         title="Atomic Habits"
//         author="James Clear"
//         copies={2}
//         borrowed={false}
//         premium={true}
//       />

//       <Book
//         title="Clean Code"
//         author="Robert Martin"
//         copies={1}
//         borrowed={true}
//         premium={false}
//       />
//     </div>
//   );
// }

// function App() {
//   const [open, setOpen] = useState(false);

//   function toggleLibrary() {
//     setOpen(!open);
//   }

//   return (
//     <div>
//       <button onClick={toggleLibrary}>O
//         {open ? "Close Library" : "Open Library"}
//       </button>

//       {open && <Library libraryName="City Library" />}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function Player(props) {
//   const [online, setOnline] = useState(props.online);
//   const [level, setLevel] = useState(props.level);

//   function toggleOnline() {O
//     setOnline(!online);
//   }

//   function increaseLevel() {
//     if (online) {
//       setLevel(level + 1);
//     }
//   }

//   return (
//     <div>
//       <h2>{props.username}</h2>

//       {online ? (
//         <p>🟢 Online</p>
//       ) : (
//         <p>⚫ Offline</p>
//       )}

//       <p>Level: {level}</p>

//       <button onClick={toggleOnline}>
//         {online ? "Go Offline" : "Go Online"}
//       </button>

//       <button onClick={increaseLevel}>
//         Level Up
//       </button>

//       {props.premium && <p>Premium Player</p>}

//       {level >= 10 && (
//         <p>Achievement: Level Master</p>
//       )}

//       {online && level >= 10 && (
//         <p>Ready for Ranked Match</p>
//       )}
//     </div>
//   );
// }

// function App() {
//   const [showPlayers, setShowPlayers] = useState(true);

//   function togglePlayers() {
//     setShowPlayers(!showPlayers);
//   }

//   return (
//     <div>
//       <button onClick={togglePlayers}>
//         {showPlayers ? "Hide Players" : "Show Players"}
//       </button>

//       {showPlayers && (
//         <div>
//           <Player
//             username="Shadow"
//             level={9}
//             online={true}
//             premium={true}
//           />

//           <Player
//             username="Hunter"
//             level={10}
//             online={false}
//             premium={false}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;











