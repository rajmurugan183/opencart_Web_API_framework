import {test,expect, request} from '@playwright/test'

let AUTH_TOKEN={Authorization :'Bearer 3cf47ec2c0f62bf786f1db78056404f322a9f893fb00885ddde470772c6e0ddb'}

test('get user',async ({request})=>{

     let responseBody=await request.get('https://gorest.co.in/public/v2/users/8614543',{
             headers: AUTH_TOKEN
    });

    let jsonBody=await responseBody.json();
    console.log(jsonBody)

    console.log(responseBody.status())
    console.log(responseBody.statusText())

    expect(responseBody.status).toBe(200);


})

test('post user',async ({request})=>{

 let userData={
  name: 'Raj Murugan',
  email: 'rajmurugan@mann.com',
  gender: 'male',
  status: 'active'

 }


     let responseBody=await request.post('https://gorest.co.in/public/v2/users/',{
             headers: AUTH_TOKEN,
             data: userData
    });

    let jsonBody=await responseBody.json();
    console.log(jsonBody)

    console.log(responseBody.status())
    console.log(responseBody.statusText())


})

test('update user',async ({request})=>{

 let userData={
  name: 'Raj Murugan',
  email: 'rajmurugan183@mann.com',
  gender: 'male',
  status: 'inactive'

 }


     let responseBody=await request.patch('https://gorest.co.in/public/v2/users/8614543',{
             headers: AUTH_TOKEN,
             data: userData
    });

    let jsonBody=await responseBody.json();
    console.log(jsonBody)

    console.log(responseBody.status())
    console.log(responseBody.statusText())


})

test('Delete user',async ({request})=>{


     let responseBody=await request.delete('https://gorest.co.in/public/v2/users/8614543',{
             headers: AUTH_TOKEN
    });

   // let jsonBody=await responseBody.json();
   // console.log(jsonBody)

    console.log(responseBody.status())
    console.log(responseBody.statusText())


})