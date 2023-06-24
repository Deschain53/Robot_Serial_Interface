export class SerialObject{

  constructor(){
    this.port = null;
    this.reader = null;
    this.writer = null;
    this.isOpen = false;
    this.isConected = false;
    //this.positionArray = [];
  }

  resetConfiguration = () => {
    if(port){
      writer.releaseLock();
      reader.releaseLock();
      this.port.close();
    }
    port = null;
    reader = null;
    writer = null;
    isOpen = false;
    isConected = false;
  } 

  selectPort = async() => {
    if ('serial' in navigator) {
        //try {
          const port = await navigator.serial.requestPort();
          await port.open({ baudRate: 9600 });
          const reader = port.readable.getReader();
          const writer = port.writable.getWriter();
  
            const portObject = {port, reader, writer}
            
            return portObject;  
        //}
        //catch (err) {
        //  console.error('There was an error opening the serial port:', err);
        //}
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

    escribe = async(data = "M1,0") => {
        try{
            //if(this.writer.ready){
              const encoder = new TextEncoder();    
              const dataArrayBuffer = encoder.encode(data);
              console.log('serialObject > escribe : ' + data)
              await this.writer.write(dataArrayBuffer);//return
            //}            
        }catch(e){
            console.log(e)
        }
    }

    escribeAsync = async(data = "") => {
      const encoder = new TextEncoder();    
      const dataArrayBuffer = encoder.encode(data);
      
      const writer = this.port.writable.getWriter();
      await writer
      writer.write(dataArrayBuffer);
      return (data)
    }

    //lee = async() => {
    //  //Escucha informacion proveniente del dispositivo
    //  while (true) {
    //    const { value, done } = await this.reader.read();
    //    if (done) {
    //      // Allow the serial port to be closed later.
    //      //this.reader.releaseLock();
    //      break;
    //    }
    //    // value is a Uint8Array.
    //    console.log(value); 
    //
    //    const decoder = new TextDecoder();  
    //    const respuesta = decoder.decode(value);  //Respuesta en texto 
    //    console.log(respuesta);
    //    return respuesta;
    //  }
    //}

    mueveA = (motor = 1, value = 5) => {
      this.escribe("M" + motor.toString() +","+value.toString())
      console.log('movido a : '+value)
    }

    //escribeA = () => {}

}




