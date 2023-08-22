import {Link} from 'react-router-dom'
import {useRef} from 'react' 
import ApiServer from '../ApiServer'
import {urls} from '../ApiServer'
import {useState} from 'react'
// import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {DocLogin} from '../redux/DocSlice'
import { useNavigate } from 'react-router-dom'

export default function Contact()
{
    const navigate = useNavigate()
    // const data = useSelector(state=>state.Dlogin.value)
    const dispatch = useDispatch()
    const [msg, setMsg] = useState('')
    let emailBox = useRef()
    let passBox = useRef()

    let login = async (event)=>{
        setMsg('')
        event.preventDefault()
        let obj = {
            email : emailBox.current.value,
            password : passBox.current.value
        }
        const response = await ApiServer.PostApiCall(urls.DocLogin,obj) 
        console.log(response)
        // console.log("login:", response.data)
        if(response.data.status)
        {
            let a = dispatch(DocLogin({...response.data.data,token:response.data.msg,type:response.data.type,status:response.data.status}))
            console.log(a)
            navigate('/home')
            event.target.reset()
        }
        else {
            setMsg('User not found !')
        }
    }
    return <>
    {/* {console.log(data)} */}
        {/* <!-- Contact Start --> */}
         <div className="container-xxl" id="contact">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    {/* <h5 className="text-primary-gradient fw-medium">Contact Us</h5> */}
                    <h1 className="mb-5">Login Here!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            {/* <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                            <form onSubmit={login}>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" ref={emailBox} required/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="password" placeholder="Your Password" ref={passBox} required/>
                                            <label for="password">Your Password</label>
                                            <br/>
                                            <b>Don't have an acconut, please <Link to='/register'>Register !</Link></b>
                                            <br/> <br/>
                                            <b>{msg}</b>
                                        </div>
                                    </div>
                                    <div className="row g-3">
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Login</button>
                                    </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* <!-- Contact End --> */}
        
</>
}