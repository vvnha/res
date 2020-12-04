export function PostData(type, userData){
    let BaseUrl = 'http://localhost/rest/api/';
    return new Promise((resole, reject)=>{
        fetch(BaseUrl+type,{
            method: 'POST',
            Accept: 'application/json',
            body:JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            resole(responseJson);
            
        })
        .catch((error) => {
            reject(error);
        });
    });
}