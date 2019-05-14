import axios from 'axios'

export const fetchjobservice={
    fetchJob  
}



async function fetchJob()
{
    return await axios.get('http://localhost:4200/api/jobs')
    .then((response)=>
    {
        return response.data.reverse();
    })
    .catch((err)=> {
        return err.message
    })
    
}