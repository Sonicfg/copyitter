
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
      apiKey: "AIzaSyDcHdqnEnGTwvrmzOWCwlrH9yeksdXqQp4",
      authDomain: "redsocial-b82d3.firebaseapp.com",
      databaseURL: "https://redsocial-b82d3-default-rtdb.firebaseio.com",
      projectId: "redsocial-b82d3",
      storageBucket: "redsocial-b82d3.appspot.com",
      messagingSenderId: "70247004637",
      appId: "1:70247004637:web:3731619f8e231848189e34"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="¡bienvenido!!!!!!😎👍👍👍pongan likes " +user_name;
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "añadir el nombre de la sala"
      });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "copyitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML +=row;
                  //Finaliza el código
            });
      });
}
getData();
function redirectToRoomName(room_name){
      localStorage.setItem("room_name", room_name);
      window.location="copyitter_page.html";
}
function desesionar(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}