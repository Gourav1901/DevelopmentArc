
function iPhone1(ASIN, color, display, camera) {
  return {
    ASIN,
    color,
    display,
    camera,
    dial: function() {
      return "tring.. tring...";
    },
    sendMessage: function() {
      return "Sending message...";
    },
    cameraClick: function() {
      return "Camera clicked";
    }
  };
}

function iPhone2(ASIN, color, display, camera, bluetooth) {
  return {
    ASIN,
    color,
    display,
    camera,
    bluetooth,
    dial: function() {
      return "tring.. tring...";
    },
    sendMessage: function() {
      return "Sending message...";
    },
    cameraClick: function() {
      return "Camera clicked";
    },
    connectBluetooth: function() {
      return "Bluetooth connected successfully...";
    }
  };
}


let i1 = iPhone1(1, "B09X67JBQV", 7.8, "IOS", "128mb", "Gray", "90mm", "2.0 MP");
console.log(i1.ASIN); // 1
console.log(i1.color); // "B09X67JBQV"
console.log(i1.display); // 7.8
console.log(i1.camera); // "IOS"
console.log(i1.dial()); // "tring.. tring..."
console.log(i1.sendMessage()); // "Sending message..."
console.log(i1.cameraClick()); // "Camera clicked"

let i2 = iPhone2(1, "B09X67JBQV", 7.8, "IOS", "128mb", "Gray", "90mm", "2.0 MP", "5.1");
console.log(i2.ASIN); 
console.log(i2.color); 
console.log(i2.display); 
console.log(i2.camera); 
console.log(i2.bluetooth); 
console.log(i2.dial()); 
console.log(i2.sendMessage()); 
console.log(i2.cameraClick()); 
console.log(i2.connectBluetooth()); 