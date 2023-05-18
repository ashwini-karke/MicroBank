import axios from "axios";

// const url="https://json-server-heroku-hostingv1.herokuapp.com/"
const url="https://my-json-server.typicode.com/ashwini-karke/MockApi/"

/* istanbul ignore next */
export async function getUser(data:{userEmail:string,userPass:string})
{
    let loginData:any[]=[];
    let loginUser;
    const {userEmail,userPass}=data;
     await axios.get(url+"users")  
      .then(res => {  
        loginData = res.data; 
      }) 
      loginUser =await loginData.filter(function (e:any)
        {
        return e.email===userEmail &&
               e.password===userPass;
        });
        return loginUser;
}

/* istanbul ignore next */
export function createUser(data:{username:string,email:string,password:string})
{
    axios.post(url+"users", data)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
          
}
/* istanbul ignore next */
export async function changePassword(updatedUsername:string,updatedEmail:string,updatedPassword:string,index:number)
{
    await axios.put(url+`users/${index}`,
    {
        username: updatedUsername,
        email: updatedEmail,
        password: updatedPassword,
      })
    .then(function (response){console.log(response)})
}
/* istanbul ignore next */
export async function getStarData()
{
    let starData:any[]=[];
    await axios.get(url+"stars")
        .then(function (response) {
            starData=  response.data;
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
        return starData;
}
/* istanbul ignore next */
export async function updateStar(key:string,categoryNumber:number,starCount:number,img:string)
{
    const service=key;
    const rating=starCount;
    const index=categoryNumber;
    const serviceImage=img;
    await axios.put(url+`stars/${index}`,{serviceName:service,image:serviceImage,rating:rating})
    .then(function (response){console.log(response)})
    
}