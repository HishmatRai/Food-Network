import firebase from './../Config/Firebase/Firebase'


function signupUser(data,path) {
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                console.log(user.user.uid)
                console.log(data)
                firebase.firestore().collection('users').doc(user.user.uid).set(data)
                    .then((res) => {
                        console.log(res)
                        firebase.auth().currentUser.sendEmailVerification().then((res)=>{

                           path.push("/")

                               dispatch({
                                type:"SIGNUPUSER"
                            })
                        })
                        .catch((error)=>{
                            console.log(error)
                        })

                    })
                    .catch((error) => {
                        console.log(error)
                    })


            })

            .catch((error) => {
                alert("Please Enter Correct Email !")

                console.log(error)
            })
    }
}


// ======================== ================================ ==================================


function signupRes(data,frwd) {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((user) => {

                console.log(data)
                firebase.firestore().collection('users').doc(user.user.uid).set(data)
                 .then((res)=>{
                    firebase.auth().currentUser.sendEmailVerification().then((res) => {
                    


                        frwd.push("/")
                        dispatch({
                         type:"SIGNUPRES"
                     })
                    })
                        .catch((error) => {
                            console.log(error)
                        })
                   
                    })
                    .catch((error)=>{
                     console.log(error)
                    })


            })

            .catch((error) => {
                alert("Please Enter Correct Email !")
                console.log(error)
            })
    }
}


// ============================= ====================================== =============================================
function LoginAll(data,pathlog) {
    return (dispatch) => {
   console.log(data)
   firebase.auth().signInWithEmailAndPassword(data.email,data.password)
   .then((res)=>{
       console.log(res.user)
       firebase.firestore().collection("users").doc(res.user.uid).get()
       .then((getData)=>{
           console.log(getData.data())
           let userData = getData.data()
         if(res.user.emailVerified===false){
            pathlog.push("/emailverification")
         }
         else{
             if(userData.age !== undefined){
                pathlog.push("/userdashboard")
             }
             else{
                pathlog.push("/restaurantdashboard")
             }
         }
          
       })
       .catch((error)=>{
           console.log(error)
       })
    //    firebase.firestore().collection("restourents").doc(res.user.uid).get()
    //    .then((getData)=>{
    //        console.log(getData.data())
    //        let userData = getData.data()
    //      if(res.user.emailVerified===false){
    //         pathlog.push("/emailverification")
    //      }
    //      else{
    //          if(userData.age === undefined){
    //             pathlog.push("/restaurantdashboard")
    //          }
    //          else{
    //             path.push("/user")
    //          }
    //      }
          
    //    })
   })
   .catch((error)=>{
       console.log(error)
   })
    }
}

// function LoginAll(data,history){
//     return dispatch => {
//     firebase.auth().signInWithEmailAndPassword(data.email,data.password)
//     .then( async function(res) {
//     console.log(res.user.emailVerified)
//     await firebase.database().ref("/").child(data.email.slice(0,-12)).on('child_added' ,snap => {
//     let data = snap.val()
//     console.log(data)
//     if(res.user.emailVerified && data === 'users'){
//       history.push("/userdashboard")
//     }
    
//     else if(res.user.emailVerified && data === 'restourents'){
//       history.push("/restaurantdashboard")
//     }
    
//     })
//     // dispatch({
//     //   type :"login",
//     // })
//     })
//     .catch(function(error) {
//         var errorMessage = error.message;
//     console.log(errorMessage)
//         // ...
//       })
//     }
//     }




export {
    signupUser,
    signupRes,
    LoginAll
}