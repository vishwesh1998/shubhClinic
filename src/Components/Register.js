import {Link} from 'react-router-dom'
import ApiServer from '../ApiServer'
import {useRef} from 'react'
import {urls} from '../ApiServer'
import {useState} from 'react'

export default function Contact()
{
    const [msg, setMsg] = useState('')
    let nameBox = useRef()  
    let phoneBox = useRef()
    let emailBox = useRef()
    let passBox = useRef()

    let register = async (event)=>{
        setMsg('')
        event.preventDefault()
        let obj = {
            name : nameBox.current.value,
            phoneNumber : phoneBox.current.value,
            email : emailBox.current.value,
            password : passBox.current.value
        }
        const response = await ApiServer.PostApiCall(urls.DocRegister,obj)
        setMsg(response.data.msg)
        event.target.reset()
    }

    return <>
        {/* <!-- Contact Start --> */}
         <div className="container-xxl" id="contact">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="mb-5">Register Here!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            {/* <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                            <form onSubmit={register}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" ref={nameBox} required/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="Your Number" placeholder="Your Number" ref={phoneBox} required/>
                                            <label for="number">Your Phone Number</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control"  required id="email" placeholder="Your Email" ref={emailBox}/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" required id="password" placeholder="Your Password" ref={passBox}/>
                                            <label for="password">Your Password</label>
                                        </div>
                                        <br/>
                                        <b>Already have an acconut, please <Link to='/login'>Login !</Link></b>
                                        <br/><br/>
                                        <b>{msg}</b>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Register</button>
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