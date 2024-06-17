import { useForm } from "react-hook-form";
import * as yup from "yup";
import './login.css';
import {yupResolver} from "@hookform/resolvers/yup";
import {  useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut  } from "firebase/auth";
import { auth } from "./firebase";


export default function Createuser() {
    const navigate = useNavigate();

    const schema = yup.object().shape(
        {
            email : yup.string().email().required(" your email is needed "),
            password : yup.string().min(6).max(20).required("password is required atleast 6 characters"),
            confirmpassword : yup.string().oneOf([yup.ref("password"),null],"your password is mismatched").required("please fill this section correctly")
        }
    );
    
    const {register,handleSubmit,formState:{errors}} = useForm(
        {resolver : yupResolver(schema) }
    );

    const clicksubmit = async (newdata) => {
        await signOut(auth)
        try{
        const res= await createUserWithEmailAndPassword(auth,newdata.email,newdata.confirmpassword); 
        console.log(res);
        navigate('/');
        }
        catch(error)
        {
           console.log(error);
        }
    }

    const clickback = () =>{
        navigate("/");
    }

    return ( 
        <div>
        <div className="login">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLkHEGZo-Sj8I4jJ-AL1kVcqlCTHYNFPxKQ&usqp=CAU"  alt="no" className="logoimg"  height={"100px"} width={"100px"}></img>
        <div className="col1">
        <div className="logininside">
        <center>
        <form onSubmit={handleSubmit(clicksubmit)} className="forms">
        <div className="inputbox">
        <input type="text" placeholder="email" {...register("email")}/>
        </div>
        <h5 className="error">{errors.email?.message}</h5>
        <div className="inputbox">
        <input type="password" placeholder="password" {...register("password")}/>
        <h5 className="error">{errors.password?.message}</h5>
        </div>
        <div className="inputbox">
        <input type="password" placeholder="confirmPassword" {...register("confirmpassword")}/>
        <h5 className="error">{errors.confirmpassword?.message}</h5>
        </div>
        <button type="submit" className="btn2"onClick={clicksubmit}  >Submit</button>
        <br></br>
        <br></br>
        <button type="submit" className="btn2"onClick={clickback}  >back</button>
        </form>
        </center>
        </div>
        </div>
        </div>
        <h6>copyrights-2023 @anand</h6>

        </div>
     );
}
