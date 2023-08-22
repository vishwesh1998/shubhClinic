import {useRef, useState} from 'react' 
import {useDispatch} from 'react-redux'
import {ContactUsList} from '../redux/ContactSlice'

export default function Contact()
{
    const [msg, setMsg] = useState('')
    const dispatch = useDispatch()
    let nameBox = useRef()
    const emailBox = useRef()
    const subjectBox = useRef()
    const textBox = useRef()
    const phoneBox = useRef()

    let save = (event) =>{
        event.preventDefault()
        setMsg('')
        // alert('hi')
        let obj = {
            name : nameBox.current.value,
            email : emailBox.current.value,
            subject: subjectBox.current.value,
            text : textBox.current.value,
            phone : phoneBox.current.value
        }
        // console.log(obj)
        dispatch(ContactUsList(obj))
        event.target.reset()
        setMsg("Your Massege Is Send")
        // setMsg('')
    }

    return <>
        {/* <!-- Contact Start --> */}
         <div className="container-xxl" id="contact">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
                    <h1 className="mb-5">Get In Touch with Your Questions!</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form onSubmit={save}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" ref={nameBox} required/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" ref={emailBox} required/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='row mt-3'>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" ref={subjectBox} required/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input className="form-control" placeholder="Phone Number" type='number' id="phone" ref={phoneBox} required/>
                                            <label for="message">Contact Number</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='row mt-3'>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}} ref={textBox} required></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div>
                                        <br/>
                                        {msg}
                                    </div>
                                <div className='row text-center'>
                                    <div className='col-12'>
                                        <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Send Message</button>
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