import {useRef} from 'react'
import {useSelector} from 'react-redux'
import ApiServer from '../../ApiServer'
import {urls} from '../../ApiServer'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {AddRecp} from '../../redux/AddReceptionistSlice'

export default function AddReceptionist()
{
    const [msg, setMsg] = useState()
    const data = useSelector(state=>state.Dlogin.value)
    const dispatch = useDispatch()
    console.log(data)
    const token = data.token
    console.log(token)
    const nameBox = useRef()
    const phoneBox = useRef()
    const emailBox = useRef()
    const passBox = useRef()
    const addBox = useRef()
    let save = async (event) =>{
        event.preventDefault()
        setMsg('')
        let obj = {
            name : nameBox.current.value,
            phoneNumber : phoneBox.current.value,
            email : emailBox.current.value,
            password : passBox.current.value,
            raddress : addBox.current.value
        }

    const response = await ApiServer.PostApiTokenCall(urls.AddRecep,obj,token)
    console.log(response.data)
    if(response.data.status)
    {
        dispatch(AddRecp({...response.data.data,type:response.data.type}))
        // console.log(a)
         setMsg(response.data.msg)
         event.target.reset()
    }
    else{
         setMsg(response.data.msg)
    }
    }
    return <>
        {/* <!-- Contact Start --> */}
         <div className="container-xxl" id="contact">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    {/* <h5 className="text-primary-gradient fw-medium">Add Receptionist!</h5> */}
                    <h1 className="mb-5">Add Receptionist!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form onSubmit={save}>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" ref={nameBox} required/>
                                            <label for="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="phone" placeholder="Phone" ref={phoneBox} required/>
                                            <label for="subject">Phone</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row g-3'>
                                    <div className="col-6">
                                        <div className="form-floating mt-3">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" ref={emailBox} required/>
                                            <label for="email">Email</label>
                                         </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating mt-3">
                                            <input type="password" className="form-control" id="password" placeholder="Your Password" ref={passBox} required/>
                                            <label for="email">Password</label>
                                        </div>
                                    </div>
                                    </div>
                                <div className='row g-3'>
                                    <div className="col-12">
                                        <div className="form-floating mt-3">
                                            <textarea type='text' className="form-control" id="address" placeholder="Your Address" ref={addBox} required/>
                                            <label for="address">Address</label>
                                            <br/>
                                            <b>{msg}</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="form-floating mt-4">
                                            <button className='btn btn-success'>Save Recptionist</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
</>
}