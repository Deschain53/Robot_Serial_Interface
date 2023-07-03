// objeto que se invoca para realizar la conexion via serial
// src>data>serialObject
export class SerialObject{

  constructor(){
    this.port = null;
    this.reader = null;
    this.writer = null;
    this.isOpen = false;
    this.isConected = false;
    this.baud = 9600;
    //this.positionArray = [];
  }

  resetConfiguration = () => {
    try {
      if(this.writer !== null) { this.writer.releaseLock(); }
      if(this.reader !== null) { this.reader.releaseLock(); }
      //this.port.close();
      port = null;
      reader = null;
      writer = null;
      isOpen = false;
      isConected = false;
      return "Reset succesfull"
    }catch( e) {
      return e
    }
  } 

  setBaud = ( newBaud = 9600) => {
    this.baud = newBaud;
  }

  selectPort = async() => {
    if ('serial' in navigator) {
        //try {
          const port = await navigator.serial.requestPort();
          await port.open({ baudRate: this.baud });
          const reader = port.readable.getReader();
          const writer = port.writable.getWriter();
  
          const portObject = {port, reader, writer}
          return portObject;  
      }
      else {
        console.error('The Web serial API doesn\'t seem to be enabled in your browser.');
      }
  }

    setConfig = (portObject) => {
      try{
        this.port = portObject.port;
        this.reader = portObject.reader;
        this.writer = portObject.writer;
        this.isOpen = true;
        this.isConected = true;
      }catch(e){
        console.log(e)
      }
    }

    escribe = (data = "M1,0") => {
        try{
            const encoder = new TextEncoder();    
            const dataArrayBuffer = encoder.encode(data);
            console.log('serialObject > escribe : ' + data)
            this.writer.write(dataArrayBuffer);
        }catch(e){
          console.log('serialObject > escribe : ','Error - Cannot read property of null')
        }
    }

    mueveA = (motor = 1, value = 5) => {
      this.escribe("M" + motor.toString() +","+value.toString())
      console.log('movido a : '+value)
    }

}




