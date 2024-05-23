import { Link ,useNavigate} from "react-router-dom"
import { useFormik } from "formik"
import { useState, useEffect } from "react";
import axios from "axios";
import { response } from "express";

export default function IShopLogin() 
{
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: values => {
            for (var user of users){
                if(user.UserId ==values.UserId && user.Password==values.Password){
               navigate("/dashboard");
                }else{
                    navigate("/errorpage");
                }
            }
               
        }
    })
    useEffect(()=>{
        axios.get("http://localhost:4000/getusers")
        .then(response=>{
            setUsers(response.data);
        })
    },[]);


    return(
        <div>
            <h2>User Login </h2>
            <h1>llucky</h1>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd value={formik.values.UserId} onChange={formik.handleChange}><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd value={formik.values.Password} onChange={formik.handleChange}><input type="password" /></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    )
}