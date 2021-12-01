// FIREBASE LINKS
user_name=localStorage.getItem("user_name");
var firebaseConfig = {
      apiKey: "AIzaSyB8Dd3Im1HqWxXJj8SZUEYcD9dY3CbNDT8",
      authDomain: "kwitter-33f4a.firebaseapp.com",
      databaseURL: "https://kwitter-33f4a-default-rtdb.firebaseio.com",
      projectId: "kwitter-33f4a",
      storageBucket: "kwitter-33f4a.appspot.com",
      messagingSenderId: "815513703954",
      appId: "1:815513703954:web:8fc9eb77028fd2c4edeacb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}

function Send() {

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,message:msg,like:0
});
document.getElementById("msg").value="";
}