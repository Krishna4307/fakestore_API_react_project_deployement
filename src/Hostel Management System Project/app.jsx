import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./USER COMPONENTS/homepage";
import ContactUs from "./USER COMPONENTS/contactus";
import AboutUs from "./USER COMPONENTS/aboutus";
import BookBed from "./USER COMPONENTS/Bookbed";
import UserDetailsForm from "./USER COMPONENTS/userDetails_form";
import Services from "./USER COMPONENTS/facilities&services";
import Rooms from "./USER COMPONENTS/rooms&accomdations";
import UserHeader from "./USER COMPONENTS/userHeader";
import AdminLogin from "./USER COMPONENTS/adminAsLogin";
import { createContext, useEffect, useState } from "react";
import AdminLayout from "./ADMIN COMPONENTS/adminLayout";
import StudentData from "./ADMIN COMPONENTS/studentData";
import StudentForm from "./ADMIN COMPONENTS/studentForm";
import UserLayout from "./USER COMPONENTS/userLayout";
import AdminDashboard from "./ADMIN COMPONENTS/adminDashboard";
import Notifications from "./ADMIN COMPONENTS/notifications";
import ProtectedRoutes from "./protectedRoutes";
import BookedUsers from "./ADMIN COMPONENTS/getBookedUsersData";
export const StudentContext=createContext();

    // =============================================
    //     Admin userID & Password
    // ============================================

const adminData={
    name:"Krishna",
    userid:"admin",
    password:"admin123"
}
function App(){
    const[editingId,setEditingId]=useState(null)
    const[studentData,setStudentData]=useState(()=>{
        const storedStudentsData=localStorage.getItem("students");
        return storedStudentsData ? JSON.parse(storedStudentsData) : [];
    })
    // const[notifications,setNotifications]=useState(0)
    const[errors,setErrors]=useState({})
    const[studentForm,setStudentForm]=useState(false)
    const[firstName,setFirstName]=useState("")
    const[searchInputValue,setSearchInputValue]=useState("")
    const[email,setEmail]=useState("")
    const[lastName,setLastName]=useState("")
    const[mobileNo,setMobileNo]=useState("")
    const[aadharNo,setAadharNo]=useState("")
    const[parentName,setParentName]=useState("")
    const[parentNo,setParentNo]=useState("")
    const[adress,setAdress]=useState("")
    const[jd,setJd]=useState("")
    const[roomNo,setRoomNo]=useState("")
    const[bedNo,setBedNo]=useState("")
    const[adminId,setAdminId]=useState("")
    const[adminPassword,setAdminPassword]=useState("")
    const[admin,setAdmin]=useState(false)
    const[loginError,setLoginError]=useState("");
    
    const[userFirstName,setUserFirstName]=useState("")
    const[userLastName,setUserLastName]=useState("")
    const[userEmail,setUserEmail]=useState("")
    const[userMobileNo,setUserMobileNo]=useState("")
    const[userAadharNo,setUserAadharNo]=useState("")
    const[userParentName,setUserParentName]=useState("")
    const[userParentNo,setUserParentNo]=useState("")
    const[userAdress,setUserAdress]=useState("")
    const[userRoomNo,setUserRoomNo]=useState("")
    const[userBedNo,setUserBedNo]=useState("");
    const[userJoinDate,setUserJoinDate]=useState("")
    const [userDetailsForm, setUserDetailsForm] = useState(()=>{
        return JSON.parse(localStorage.getItem("storeUserDetailsForm")) || [] 
    }
    );
    // const[roomsBookedUsersList,setRoomsBookedUsersList]=useState([]);
    const navigate=useNavigate();


    // ==================================================================
    //         storing Data into Localstorage
    // ==================================================================

        useEffect(() => {
            localStorage.setItem("students", JSON.stringify(studentData));
        }, [studentData]);


    // ==================================================================
    //         Submitting Data
    // ==================================================================

    const handleSubmitForm=(e)=>{
        e.preventDefault()
        let hasError=false
        let newErrors={}
        if(firstName.trim()===""){
            newErrors.firstName="Please Enter name"
            hasError=true
        }
        if(lastName.trim()===""){
            newErrors.lastName="Please Enter last Name"
            hasError=true
        }
        if(email.trim()===""){
            newErrors.email="Please Enter Email"
            hasError=true
        }
        if(mobileNo.trim()===""){
            newErrors.mobileNo="Please Enter Mobile Number"
            hasError=true
        }
        if(aadharNo.trim()===""){
            newErrors.aadharNo="Please Aadhar Number"
            hasError=true
        }
        if(parentName.trim()===""){
            newErrors.parentName="Please Enter Parent name"
            hasError=true
        }
        if(parentNo.trim()===""){
            newErrors.parentNo="Please Enter parent Mobile Number"
            hasError=true
        }
        if(jd.trim()===""){
            newErrors.jd="Please select Joining date"
            hasError=true
        }
        if(roomNo.trim()===""){
            newErrors.roomNo="Please Enter Room No"
            hasError=true
        }
        if(bedNo.trim()===""){
            newErrors.bedNo="Please Enter Bed No"
            hasError=true
        }
        setErrors(newErrors)
        if(hasError){
            return;
        }
            setStudentData([...studentData,{
            id:Date.now(),
            firstName:firstName,
            lastName:lastName,
            email:email,
            mobileNo:mobileNo,
            aadharNo:aadharNo,
            parentName:parentName,
            parentNo:parentNo,
            adress:adress,
            jd:jd,
            roomNo:roomNo,
            bedNo:bedNo
        }
            
    ])

        setFirstName(""),
        setLastName(""),
        setEmail(""),
        setMobileNo(""),
        setAadharNo(""),
        setParentName(""),                    
        setParentNo(""),
        setAdress(""),
        setJd(""),
        setRoomNo(""),
        setBedNo(""),
        setStudentForm(false),
        navigate("/studentsData")
    }


    // ==================================================================
    //         Searched Students
    // ==================================================================
        let filtereSearchedStudents=studentData.filter((student)=>{
            return(
                student.firstName.trim().toLowerCase().includes(searchInputValue.trim().toLowerCase())||
                student.adress.trim().toLowerCase().includes(searchInputValue.trim().toLowerCase())
                );
        })
        // console.log(filtereSearchedStudents)
    // ==================================================================
    //         Edit Student Data
    // ==================================================================
    function handleEdit(student){
        navigate("/studentForm")
        setEditingId(student.id)
        setFirstName(student.firstName)
        setLastName(student.lastName)
        setAadharNo(student.aadharNo)
        setEmail(student.email)
        setAdress(student.adress)
        setJd(student.jd)
        setParentName(student.parentName)
        setParentNo(student.parentNo)
        setMobileNo(student.mobileNo)
        setRoomNo(student.roomNo)
    }

    // ==================================================================
    //         Update Student Data
    // ==================================================================
        function handleUpdate(){
            let updatedStudents=studentData.map((student)=>{
                if(student.id === editingId){
                    return{
                        ...student,
                        firstName:firstName,
                        lastName:lastName,
                        email:email,
                        mobileNo:mobileNo,
                        aadharNo:aadharNo,
                        parentName:parentName,
                        parentNo:parentNo,
                        adress:adress,
                        jd:jd,
                        roomNo:roomNo
                    }
                }
                return student;
            });
            setStudentData(updatedStudents)
            
            setFirstName(""),
            setLastName(""),
            setEmail(""),
            setMobileNo(""),
            setAadharNo(""),
            setParentName(""),                    
            setParentNo(""),
            setAdress(""),
            setJd(""),
            setRoomNo("")
            setEditingId(null)
            navigate("/studentsData")            
        }

    // ==================================================================
    //         Validating Admin Login Data
    // ==================================================================
    const handleSubmitAdminLogin=(e)=>{
        e.preventDefault();
        if(adminId.trim().toLowerCase()==adminData.userid && adminPassword.trim().toLowerCase()==adminData.password){
            setAdmin(true)
            setLoginError("")
            navigate("/adminDashboard")
        }
        else{
            setAdmin(false)
            setLoginError("Invalid AdminId or Password ! please try Again")
            navigate("/adminLogin")
        }
    }

    // ==================================================================
    //         Deleting Studnet Data
    // ==================================================================
    function handleDelete(id){
        const filterDeleteStudents=studentData.filter((student)=>{
            return student.id!==id;
        })
        setStudentData(filterDeleteStudents)
    }

    // ==================================================================
    //          Submitting userdetais form for Room booking
    // ==================================================================

    
    function handleSubmitUserDetails(e) {
        e.preventDefault();

        let hasError = false;
        let newErrors = {};

        // // Validation
        if (userFirstName.trim() === "") {
            newErrors.userFirstName = "Please Enter name";
            hasError = true;
        }

        if (userLastName.trim() === "") {
            newErrors.userLastName = "Please Enter last Name";
            hasError = true;
        }

        if (userEmail.trim() === "") {
            newErrors.userEmail = "Please Enter Email";
            hasError = true;
        }

        if (userMobileNo.trim() === "") {
            newErrors.userMobileNo = "Please Enter Mobile Number";
            hasError = true;
        }

        if (userAadharNo.trim() === "") {
            newErrors.userAadharNo = "Please Enter Aadhar Number";
            hasError = true;
        }

        if (userParentName.trim() === "") {
            newErrors.userParentName = "Please Enter Parent name";
            hasError = true;
        }

        if (userParentNo.trim() === "") {
            newErrors.userParentNo = "Please Enter Parent Mobile Number";
            hasError = true;
        }

        if (userAdress.trim() === "") {
            newErrors.userAdress = "Please Enter Address";
            hasError = true;
        }

        if (userRoomNo === "none") {
            newErrors.userRoomNo = "Please Select Room No";
            hasError = true;
        }

        if (userBedNo === "none") {
            newErrors.userBedNo = "Please select Bed No";
            hasError = true;
        }

        if (userJoinDate === "") {
            newErrors.userJoinDate = "Please Select Join Date";
            hasError = true;
        }

        setErrors(newErrors);

        if (hasError) {
            return;
        }

        // Create new user object
        const newUser = {
            id: Date.now(),
            userFirstName: userFirstName,
            userLastName: userLastName,
            userEmail: userEmail,
            userMobileNo: userMobileNo,
            userAadharNo: userAadharNo,
            userParentName: userParentName,
            userParentNo: userParentNo,
            userAdress: userAdress,
            userRoomNo: Number(userRoomNo),
            userBedNo: Number(userBedNo),
            userJoinDate:userJoinDate
        };

        // Get existing data from LocalStorage
        const storedData =
            JSON.parse(localStorage.getItem("storeUserDetailsForm")) || [];

        // Add new user to existing data
        const updatedData = [...storedData, newUser];

        // Save updated data only when it contains requests
        if (updatedData.length > 0) {
            localStorage.setItem(
                "storeUserDetailsForm",
                JSON.stringify(updatedData)
            );
        }

        // Update React state
        setUserDetailsForm(updatedData);

        // Increment notifications count
        // setNotifications((prev) => prev + 1);

        alert("Your form Submitted Successfully ✅");

        // Clear form fields
        setUserFirstName("");
        setUserLastName("");
        setUserEmail("");
        setUserMobileNo("");
        setUserAadharNo("");
        setUserParentName("");
        setUserParentNo("");
        setUserAdress("");
        setUserRoomNo("");
        setUserBedNo("");
        setUserJoinDate("");
    }
    return(
        
            <StudentContext.Provider value={{
                // notifications,
                adminData,
                studentData,
                firstName,setFirstName,
                lastName,setLastName,
                email,setEmail,
                mobileNo,setMobileNo,
                aadharNo,setAadharNo,
                parentName,setParentName,                    
                parentNo,setParentNo,
                adress,setAdress,
                jd,setJd,
                roomNo,setRoomNo,
                bedNo,setBedNo,
                studentForm,setStudentForm,
                handleSubmitForm,
                errors,
                editingId,handleEdit,handleDelete,handleUpdate,
                searchInputValue,setSearchInputValue,
                setAdminId,adminPassword,setAdminPassword,handleSubmitAdminLogin,
                admin,loginError,setLoginError,
                filtereSearchedStudents,

                userFirstName,setUserFirstName,
                userLastName,setUserLastName,
                userEmail,setUserEmail,
                userMobileNo,setUserMobileNo,
                userAadharNo,setUserAadharNo,
                userParentName,setUserParentName,                    
                userParentNo,setUserParentNo,
                userAdress,setUserAdress,
                userRoomNo,setUserRoomNo,
                userBedNo,setUserBedNo,
                userJoinDate,setUserJoinDate,
                userDetailsForm,setUserDetailsForm,handleSubmitUserDetails,
                // roomsBookedUsersList,setRoomsBookedUsersList
            }}>
                <Routes>
                    <Route element={<UserLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="services" element={<Services/>}/>
                        <Route path="rooms" element={<Rooms/>}/>
                        <Route path="about" element={<AboutUs/>}/>
                        <Route path="bookBed" element={<BookBed/>}/>
                        <Route path="userDetailsform" element={<UserDetailsForm/>}/>
                        <Route path="contactUs" element={<ContactUs/>}/>
                            <Route path="adminlogin" element={<AdminLogin/>}/>
                    </Route>
            
                    <Route element={<AdminLayout/>}>
                        <Route path="/adminDashboard" element={<ProtectedRoutes admin={admin}><AdminDashboard/></ProtectedRoutes>}/>
                        <Route path="/studentsData" element={<StudentData/>}/>
                        <Route path="/studentForm" element={<StudentForm/>}/>
                        <Route path="/notifications" element={<Notifications/>}/>
                        <Route path="/bookedusers" element={<BookedUsers/>}/>
                    </Route>
                </Routes>
            </StudentContext.Provider>
    )
}
export default App;