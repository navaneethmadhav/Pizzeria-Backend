const db = require('./db')

const getProducts =()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No products found'
                }
            }
        }
    )
}

// const getFood =()=>{
//   return db.Food.find().then(
//       (result)=>{
//           if(result){
//               return{
//                   status:true,
//                   statusCode:200,
//                   products:result
//               }
//           }
//           else{
//               return{
//                   status:false,
//                   statusCode:404,
//                   message:'No products found'
//               }
//           }
//       }
//   )
// }

userDetails={
    'akhil01@gmail.com':{username:'Akhil',phone:'9856743486',email:'akhil01@gmail.com',password:1000},
    'manoj123@gmail.com':{username:'Manoj',phone:'9756443287',email:'manoj123@gmail.com',password:1001},
    'edwin147@gmail.com':{username:'Edwin',phone:'6587415211',email:'edwin147@gmail.com',password:1002}
  }

 const register=(username,password,email,phone)=>{
  return db.User.findOne({email})
  .then(user=>{
    if(user){
      return{
        status:false,
        statusCode:400,
        message:'User already Registered'
      }
    }
    else{
      const newUser=new db.User({
        username:username,
        password:password,
        email:email,
        phone:phone
      })
      newUser.save();
      return{
        status:true,
        statusCode:200,
        message:'register successful'
      }
    }
  })
  }

  const login=(email,password)=>{
    return db.User.findOne({email,password})
    .then(user=>{
      if(user){
        currentUser=user.username
        currentEmail=email;
        return{
          status:true,
          statusCode:200,
          message:'Login successful',
          currentUser:currentUser,
          currentEmail:email
        }
      }
      else{
        return{
            status:false,
            statusCode:400,
            message:'Invalid Userdetails'
          }
        }
      })
    }
  //     if(pswd==userDetails[email]['password']){
  //       currentUser=userDetails[email]['username']
  //       currentEmail=email;
  //       return{
  //           status:true,
  //           statusCode:200,
  //           message:'Login successful'
  //         }
  //     }
  //     else{
  //       return{
  //           status:false,
  //           statusCode:400,
  //           message:'Password Incorrect'
  //         }
  //     }
  //   }
  //   else{
  //       return{
  //           status:false,
  //           statusCode:400,
  //           message:'Invalid Userdetails'
  //         }
  //   }
  // }

//   const getfooddetail=(id)=>{
//     return db.Product.findOne({id})
//     .then(result => {
//         if (result) {

//             return {
//                 statusCode: 200,
//                 status: true,
//                 products:result
//             }
//         }
//         else {
//             return {
                
//                 status: false,
//                 statusCode: 404,
//                 message: 'No items available'
//             }
//         }
//     })
// }

module.exports ={
    getProducts,
    // getFood,
    register,
    login,
    // getfooddetail
}