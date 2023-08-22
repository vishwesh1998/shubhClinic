import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {DocLogin} from '../redux/DocSlice'

export default function Menu()
{
    const data = useSelector(state=>state.Dlogin.value)
    console.log(data)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let logout = ()=>{
        dispatch(DocLogin({name:undefined, token:undefined, isLogin:false, type:undefined}))
        navigate('/login')
    }

    // const data = useSelector(state=>state.Dlogin.value)
    return <>
    {/* <!-- Spinner Start --> */}
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        {/* <!-- Spinner End --> */}


        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl position-relative p-0" id="home">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link className="navbar-brand p-0">
                    <h1 className="m-0">SuBhCLiNiC</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        {data.status?
                        <>
                        {data.type=='doctor'?
                        <><Link to='/home' className="nav-item nav-link">Profile</Link>
                        <Link to='/addreceptionist' className="nav-itsem nav-link">AddReceptionist</Link>
                        <Link to='/receptionistlist' className="nav-item nav-link">ReceptionistList</Link>
                        {/* <Link to='/updatereceptionist' className="nav-item nav-link">UpdateReceptionist</Link> */}
                        <Link to='/patientList' className="nav-item nav-link">PatientList</Link>
                        {/* <Link to='/updatepatient' className="nav-item nav-link">UpdatePatient</Link> */}
                        <b className="nav-item nav-link" onClick={logout} style={{cursor:'pointer'}}>Logout</b></>
                        :""}

                        {data.type=='reception'?
                        <>
                        <Link to='/home' className="nav-item nav-link">Profile</Link>
                        <Link to='/newappointment' className="nav-itsem nav-link">NewAppointment</Link>
                        <Link to='/recpatientlist' className="nav-item nav-link">PatientList</Link>
                        <Link to='/contactus' className="nav-item nav-link">ContactUsDetails</Link>
                        {/* <Link to='/updatepatient' className="nav-item nav-link">UpdatePatient</Link> */}
                        <b className="nav-item nav-link" onClick={logout} style={{cursor:'pointer'}}>Logout</b>
                        </>
                        :""}
                        </>

                        :
                        
                        <><Link to='/' className="nav-item nav-link">Home</Link>
                        <Link to='/about' className="nav-item nav-link">About</Link>
                        {/* <Link to='/services' className="nav-item nav-link">Service</Link> */}
                        <Link to='/contact' className="nav-item nav-link">Contact</Link>
                        <Link to='/register' className="nav-item nav-link">Register</Link>
                        <Link to='/login' className="nav-item nav-link">Login</Link></>}

                        {/* {data.isLogin?<><Link to='/doctorhome' className="nav-item nav-link">Home</Link>
                        <Link to='/addreceptionist' className="nav-itsem nav-link">AddReceptionist</Link>
                        <Link to='/receptionistlist' className="nav-item nav-link">ReceptionistList</Link>
                        <Link to='/patientList' className="nav-item nav-link">PatientList</Link>
                        <b className="nav-item nav-link" onClick={logout} style={{cursor:'pointer'}}>Logout</b></>:
                        <></>} */}
                    </div>
                </div>
            </nav>
            </div>
        {/* <!-- Navbar & Hero End --> */}
        <div className="container-xxl bg-primary hero-header">
                <div className="container ">
                    <div className="row g-5 mt-3">
                        <div className="col-lg-8 text-center text-lg-start ">
                            {data.status==true?<></>
                            :
                            <><h1 className="text-white mb-4 animated slideInDown">The Revolutionary App That Helps To Diagnos Your Own Health</h1>
                            <br/>
                            <h3 className="text-white pb-3 animated slideInDown">All doctors treat, but a good doctor lets nature heal.</h3>
                            <br/><br/><br/><br/><br/><br/><br/><br/></>}
                        </div>
                        <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp" data-wow-delay="0.3s">
                            <div className="owl-carousel screenshot-carousel">
                                <img className="img-fluid" src="img/screenshot-1.png" alt=""/>
                                <img className="img-fluid" src="img/screenshot-2.png" alt=""/>
                                <img className="img-fluid" src="img/screenshot-3.png" alt=""/>
                                <img className="img-fluid" src="img/screenshot-4.png" alt=""/>
                                <img className="img-fluid" src="img/screenshot-5.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
 </>
}