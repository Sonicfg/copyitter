//TUS ENLACES DE FIREBASE
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            nombre: user_name,
            mensaje: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Inicia código
                        nombre = message_data["nombre"]
                        mensaje = message_data["mensaje"]
                        like = message_data["like"]
                        row = "<h4>" + nombre + "</h4><h4 class='message_h4'>" + mensaje + "</h4> <button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'> 👍,🥳y🧐" + like + "</button>";
                        document.getElementById("output").innerHTML += row;
                        //Termina código .innerHTML
                  }
            });
      });
}
getData();
function updateLike(message_id) {
      likes = document.getElementById(message_id).value;
      updated_likes = Number(likes) + 1000;
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}
