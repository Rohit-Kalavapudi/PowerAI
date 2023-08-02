export const api=async(query)=>{
    const data = await fetch('http://localhost:5000',{
        method:'POST',
        headers:{
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
        prompt: query
        })
    })
    
    return data;
}
