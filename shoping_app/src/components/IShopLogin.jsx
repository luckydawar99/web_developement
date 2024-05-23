import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function IShopLogin() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        axios.get("http://127.0.0.1:4000/getusers")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: values => {
            const foundUser = users.find(user => user.UserId === values.UserId && user.Password === values.Password);
            if (foundUser) {
                console.warn(foundUser.UserId);
                alert(" Correct Information" );
                setCookies("userid", foundUser.UserId);
                navigate("/dashboard");
            } else {
                alert("Incorrect Information");
                navigate("/errorpage");
            }
        }
    });

    return (
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input
                            type="text"
                            name="UserId"
                            value={formik.values.UserId}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input
                            type="password"
                            name="Password"
                            value={formik.values.Password}
                            onChange={formik.handleChange}
                        />
                    </dd>
                </dl>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
}



// import { Link ,useNavigate} from "react-router-dom"
// import { useFormik } from "formik"
// import { useState, useEffect } from "react";
// import{useCookies} from "react-cookie";
// import axios from "axios";

// //import { response } from "express";
// //import { response } from "express";

// export default function IShopLogin() 
// {
//     let navigate = useNavigate();
//     const [users, setUsers] = useState([]);
//     const [cookies,setCookies,removeCookies] =useCookies();
//     const formik = useFormik({
//         initialValues: {
//             UserId: '',
//             Password: ''
//         },
//         onSubmit: values => {     
//             for (var user of users){
//                 if(user.UserId == values.UserId && user.Password == values.Password){
//                     console.warn(user.UserId)
//                     alert("user correct" +values.UserId)
//                     setCookies("userid",user.UserId)
             
//                     navigate("/dashboard");
//                break;
//                 }else{
//                     navigate("/errorpage");
//                 }
//             }
               
//         }
//     })
//     useEffect(()=>{
//         axios.get("http://127.0.0.1:4000/getusers")
//         .then(response=>{
//             setUsers(response.data);
//         })
//     },[]);


//     return(
//         <div>
//             <h2>User Login </h2>
//             <form onSubmit={formik.handleSubmit}>
//                 <dl>
//                     <dt>User Id</dt>
//                     <dd value={formik.values.UserId}  name="UserId" onChange={formik.handleChange}><input type="text" /></dd>
//                     <dt>Password</dt>
//                     <dd value={formik.values.Password} name="Password" onChange={formik.handleChange}><input type="password" /></dd>
//                 </dl>
//                 <button className="btn btn-primary">Login</button>
//             </form>
//             <br />
//             <Link to="/register">New User?</Link>
//         </div>
//     )
// }