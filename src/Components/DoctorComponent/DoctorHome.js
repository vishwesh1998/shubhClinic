import {useSelector} from 'react-redux'

export default function DoctorHome()
{
    const data = useSelector(state=>state.Dlogin.value)
    return <div className='container d-flex justify-content-center'>
        <div>
        {data.type=='doctor'?<>
                            <h1 className="text-dark mb-4 animated slideInDown">Welcome Dr. {data.name}</h1>
                            <br/>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className='col-6 mt-1'>
                                    <label className="text-dark mb-4 animated slideInDown"><b>ID : </b></label>
                                    </div>
                                    <div className='col-6'>
                                    <input type="text" className='form-control text-dark' disabled value={data.id}/>
                                    </div> 
                                </div>
                                <div className="row mt-5">
                                    <div className='col-6 mt-1'>
                                    <label className="text-dark mb-4 animated slideInDown"><b>EMAIL : </b></label>
                                    </div>
                                    <div className='col-6'>
                                    <input type="text" className='form-control text-dark' disabled value={data.email}/>
                                    </div> 
                                </div>
                                <div className="row mt-5">
                                    <div className='col-6 mt-1'>
                                    <label className="text-dark mb-4 animated slideInDown"><b>CONATCT NUMBER : </b></label>
                                    </div>
                                    <div className='col-6'>
                                    <input type="text" className='form-control text-dark' disabled value={data.phoneNumber}/>
                                    </div> 
                                </div>
                            </div>
                            
                            </>
                            :<><h1 className="text-dark mb-4 animated slideInDown">Welcome Receptionist {data.name}</h1>
                            <br/>
                            <div className="container">
                                <div className="row">
                                    <div className='col-6 mt-1'>
                                    <label className="text-dark mb-4 animated slideInDown"><b>ID : </b></label>
                                    </div>
                                    <div className='col-6'>
                                    <input type="text" className='form-control text-dark' disabled value={data.id}/>
                                    </div> 
                                </div>
                                <div className="row mt-5">
                                    <div className='col-6 mt-1'>
                                    <label className="text-dark mb-4 animated slideInDown"><b>EMAIL : </b></label>
                                    </div>
                                    <div className='col-6'>
                                    <input type="text" className='form-control text-dark' disabled value={data.email}/>
                                    </div> 
                                </div>
                                <div className="row mt-5">
                                    <div className='col-6 mt-1'>
                                    <label className="text-dark mb-4 animated slideInDown"><b>CONATCT NUMBER : </b></label>
                                    </div>
                                    <div className='col-6'>
                                    <input type="text" className='form-control text-dark' disabled value={data.phoneNumber}/>
                                    </div> 
                                </div>
                            </div>
                            </>}
                            </div>
                            </div>
}