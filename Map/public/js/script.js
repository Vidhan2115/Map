const socket = io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) =>{
        const{ latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude});
    }, 
    (error) => {
        console.log(error);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    }
  );
}


L.map("map").setView([0,0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");