//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAsuYFnev3Wpw4U9UTCfGXVZEUVUn7atjU",
      authDomain: "kwitter-3ee6d.firebaseapp.com",
      databaseURL: "https://kwitter-3ee6d-default-rtdb.firebaseio.com",
      projectId: "kwitter-3ee6d",
      storageBucket: "kwitter-3ee6d.appspot.com",
      messagingSenderId: "962824679631",
      appId: "1:962824679631:web:c73d8e98bab9fae21707ba"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");


    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
                
          });
          
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
namee = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>"+ namee +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) +1;

firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
 }