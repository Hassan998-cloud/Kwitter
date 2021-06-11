
//ADD YOUR FIREBASE LINKS HERE
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

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom(){
 room_name = document.getElementById("room_name").value;

 localStorage.setItem("room_name", room_name);

 firebase.database().ref("/").child(room_name).update({
       purpose:"add new room name"
 });
 window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
 function redirectToRoomName(name){
       localStorage.setItem("room_name",name); 
       window.location= "kwitter_page.html";
 }

 function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
 }