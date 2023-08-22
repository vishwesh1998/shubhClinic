import {Link} from 'react-router-dom'

export default function Footer()
{
    return <>
     {/* <!-- Footer Start --> */}
        <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4">
                        <h4 className="text-white mb-4">Address</h4>
                        <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, Indore, MP</p>
                        <p><i className="fa fa-phone-alt me-3"></i>+91 87978-98790</p>
                        <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" ><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" ><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" ><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <h4 className="text-white mb-4">Quick Link</h4>
                        <Link className="btn btn-link" to='/home'>Home Us</Link>
                        <Link className="btn btn-link" to='/about'>About Us</Link>
                        <Link className="btn btn-link" to='/contact'>Contact Us</Link>
                        <Link className="btn btn-link" to='/services'>Services Us</Link>
                        <Link className="btn btn-link" to='/contact'>Contact Us</Link>
                        <Link className="btn btn-link" to='/register'>Register Us</Link>
                        <Link className="btn btn-link" to='/login'>Login Us</Link>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <h4 className="text-white mb-4">More Details</h4>
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div className="position-relative w-100 mt-3">
                            <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{height: "48px"}} />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary-gradient fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
							
							{/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
							Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                {/* <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up text-white"></i></a>
    </>
}