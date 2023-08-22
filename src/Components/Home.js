export default function Home()
{
    return <>

<div className="container-xxl" id="pricing">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="text-primary-gradient fw-medium">Pricing Plan</h5>
                    <h1 className="mb-5">Choose Your Plan</h1>
                </div>
                <div className="tab-class text-center pricing wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center bg-primary-gradient rounded-pill mb-5">
                        <li className="nav-item">
                            <button className="nav-link active" data-bs-toggle="pill" href="#tab-1">Monthly</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="pill" href="#tab-2">Yearly</button>
                        </li>
                    </ul>
                    <div className="tab-content text-start">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="bg-light rounded">
                                        <div className="border-bottom p-4 mb-4">
                                            <h4 className="text-primary-gradient mb-1">Starter Plan</h4>
                                            <span>Powerful & Awesome Features</span>
                                        </div>
                                        <div className="p-4 pt-0">
                                            <h1 className="mb-3">
                                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>14.99<small
                                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                                            </h1>
                                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <a href="" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-light rounded border">
                                        <div className="border-bottom p-4 mb-4">
                                            <h4 className="text-primary-gradient mb-1">Advance Plan</h4>
                                            <span>Powerful & Awesome Features</span>
                                        </div>
                                        <div className="p-4 pt-0">
                                            <h1 className="mb-3">
                                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>24.99<small
                                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                                            </h1>
                                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <a href="" className="btn btn-secondary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-light rounded">
                                        <div className="border-bottom p-4 mb-4">
                                            <h4 className="text-primary-gradient mb-1">Premium Plan</h4>
                                            <span>Powerful & Awesome Features</span>
                                        </div>
                                        <div className="p-4 pt-0">
                                            <h1 className="mb-3">
                                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>34.99<small
                                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                                            </h1>
                                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <a href="" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade p-0">
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <div className="bg-light rounded">
                                        <div className="border-bottom p-4 mb-4">
                                            <h4 className="text-primary-gradient mb-1">Starter Plan</h4>
                                            <span>Powerful & Awesome Features</span>
                                        </div>
                                        <div className="p-4 pt-0">
                                            <h1 className="mb-3">
                                                <small className="align-top" style={{fontSize: "22px", lineHeight: '45px'}}>$</small>114.99<small
                                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Yearly</small>
                                            </h1>
                                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <a href="" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-light rounded border">
                                        <div className="border-bottom p-4 mb-4">
                                            <h4 className="text-primary-gradient mb-1">Advance Plan</h4>
                                            <span>Powerful & Awesome Features</span>
                                        </div>
                                        <div className="p-4 pt-0">
                                            <h1 className="mb-3">
                                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>124.99<small
                                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Yearly</small>
                                            </h1>
                                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <a href="" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bg-light rounded">
                                        <div className="border-bottom p-4 mb-4">
                                            <h4 className="text-primary-gradient mb-1">Premium Plan</h4>
                                            <span>Powerful & Awesome Features</span>
                                        </div>
                                        <div className="p-4 pt-0">
                                            <h1 className="mb-3">
                                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>134.99<small
                                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Yearly</small>
                                            </h1>
                                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary-gradient pt-1"></i></div>
                                            <a href="" className="btn btn-primary-gradient rounded-pill py-2 px-4 mt-4">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<div className="container-xxl py-5" id="feature">
            <div className="container py-5 px-lg-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="text-primary-gradient fw-medium">App Features</h5>
                    <h1 className="mb-5">Awesome Features</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-eye text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">High Resolution</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-layer-group text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Retina Ready</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-edit text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Editable Data</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-shield-alt text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Fully Secured</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-cloud text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Cloud Storage</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded p-4">
                            <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-mobile-alt text-white fs-4"></i>
                            </div>
                            <h5 className="mb-3">Fully Responsive</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
            <div className="container-xxl">
            <div className="container py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="text-primary-gradient fw-medium">Screenshot</h5>
                        <h1 className="mb-4">User Friendly interface And Very Easy To Use Fitness App</h1>
                        <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <p><i className="fa fa-check text-primary-gradient me-3"></i>Diam dolor diam ipsum et tempor sit</p>
                        <p><i className="fa fa-check text-primary-gradient me-3"></i>Aliqu diam amet diam et eos labore</p>
                        <p className="mb-4"><i className="fa fa-check text-primary-gradient me-3"></i>Clita erat ipsum et lorem et sit</p>
                        <a href="" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Read More</a>
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