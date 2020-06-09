// This is a JavaScript file
$(document).on("click","#alerta",function(){
function retorno(){}
navigator.notification.alert("Minha Mensagem",retorno,"Aviso:","Aceito");
});

$(document).on("click","#confirm",function(){
function confirma(buttonIndex){
  if(buttonIndex == 1){
  navigator.notification.alert("escolheu a opção A");
}else{
navigator.notification.alert("escolheu a opção B");
}

}
navigator.notification.confirm("escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click","#beep",function(){
function retorno(){}
navigator.notification.beep(4);
});

$(document).on("click","#vibrar",function(){
function retorno(){}
navigator.vibrate(4000);

function mostraMapa(lat, long){
   L.mapquest.key = 'tdHRRgGAtGFILDYai744VDWCdTwtGvAX';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());

}

$(document).on("click","#local",function(){
function retorno(){}
var onSuccess = function(position) {
  mostraMapa( position.coords.latitude, position.coords.longitude)
  };
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');


    
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    window.addEventListener("batterystatus", onBatteryStatus, false);

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
window.addEventListener("batterylow", onBatteryLow, false);

function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
}
window.addEventListener("batterycritical", onBatteryCritical, false);

function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}
});
});

