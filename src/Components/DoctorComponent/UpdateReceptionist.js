import {useRef} from 'react'
import {useSelector} from 'react-redux'
import ApiServer, {urls} from '../../ApiServer'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function UpdateReceptionist()
{
    const navigate = useNavigate()
    const List = useSelector(state=>state.UpdateRecep.value)
    const tokenD = useSelector(state=>state.Dlogin.value)
    let token = tokenD.token
    console.log(List)
    const nameBox = useRef()
    const phoneBox = useRef()
    const newpassBox = useRef()
    const oldpassBox = useRef()

    useEffect(()=>{
        nameBox.current.value = List.name
        phoneBox.current.value = List.phoneNumber
        newpassBox.current.value = List.password
    },[])

    let save = async (event)=>{
        event.preventDefault()
        let status = window.confirm("Are You Sure ?")
        if(status)
        {
        const a = List.id
        let obj = {
            name : nameBox.current.value,
            password : newpassBox.current.value,
            oldPassword : oldpassBox.current.value,
            phoneNumber : phoneBox.current.value
        }
        // console.log(obj)
        const response = await ApiServer.PutApiCall(urls.UpdateRecp+a,obj,token)
        console.log(response)
        if(response.data.status)
        {
            event.target.reset()
            navigate('/receptionistlist')
        }
        }
    }
    return <>
    <div className="container-xxl" id="contact">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    {/* <h5 className="text-primary-gradient fw-medium">Add Receptionist!</h5> */}
                    <h1 className="mb-5">Update Receptionist!</h1>
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
                                            <input type="text" className="form-control" id="phone" placeholder="Phone"  ref={phoneBox} required/>
                                            <label for="subject">Phone</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row g-3'>
                                    <div className="col-6">
                                        <div className="form-floating mt-3">
                                            <input type="password" className="form-control" id="old_password" placeholder="old Password"  ref={oldpassBox} required value={List.password} disabled/>
                                            <label for="password">Old Password</label>
                                         </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating mt-3">
                                            <input type="password" className="form-control" id="new_password" placeholder="New Password"  ref={newpassBox} required/>
                                            <label for="new_password">New Password</label>
                                        </div>
                                    </div>
                                    </div>
                                <div className="row g-3">
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="form-floating mt-4">
                                            <button className='btn btn-success'>Update Recptionist</button>
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