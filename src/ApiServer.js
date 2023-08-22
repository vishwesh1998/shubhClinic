import axios from 'axios'

class ApiServer{
    
    PostApiCall(url,data){
        return axios.post(url,data)
    }

    GetApiCall(url){
        return axios.get(url)
    }

    PostApiTokenCall(url,data,token){
        return axios.post(url,data,{headers:{Authorization:`Bearer ${token}`}})
    }

    GetApiTokenCall(url,token){
        return axios.get(url,{headers:{Authorization:`Bearer ${token}`}})
    }

    DeleteApiTokenCall(url,token){
        return axios.delete(url,{headers:{Authorization:`Bearer ${token}`}})
    }

    PutApiCall(url,data,token){
        return axios.put(url,data,{headers:{Authorization:`Bearer ${token}`}})
    }

    PutApiTokenCall(url,token){
        return axios.put(url,{headers:{Authorization:`Bearer ${token}`}})
    }
    
}

const Demourl = 'http://apps.codebetter.in:8082/' 

export const urls = {
    DocRegister : Demourl+'clinic/auth/doctor/save',
    DocLogin : Demourl+'clinic/auth/login',
    AddRecep : Demourl+'clinic/api/reception/save',
    GetRecp : Demourl+'clinic/api/reception/lists',
    GetPatient : Demourl+'clinic/api/patient/list',
    DeleteApi : Demourl+'clinic/api/patient/delete/',
    NewPat : Demourl+'clinic/api/patient/addpatient',
    DelRecp : Demourl+'clinic/api/reception/delete/',
    UpdateRecp : Demourl+'clinic/api/reception/updateReception/',
    UpdatePat : Demourl+'clinic/api/patient/update/',
    GetRecPatient : Demourl+'clinic/api/patient/lists',
    PatDone : Demourl+'clinic/api/patient/done/',
    PatUndone : Demourl+'clinic/api/patient/undo/' 
}

export default new ApiServer

