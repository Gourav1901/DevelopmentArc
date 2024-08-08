function getUserData(id,callback){
  setTimeout(()=>{
    const user = {
      id:id,
      name:"Gourav",
      email:"gourav@123"
    }
    callback(user);
  },11000)
}

function displayUser(user){
  console.log(user.id)
  console.log(user.name)
  console.log(user.email)
}


getUserData(1,displayUser);