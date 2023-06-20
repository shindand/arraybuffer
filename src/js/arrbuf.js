function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

class ArrayBufferConverter {
  constructor(buff) {
    this.buffer = buff;
  }

  load(buff) {
    let bufferV = new Uint16Array(buff);
    let oper = "";
    for (let i = 0; i < bufferV.length; i++) {
      oper += String.fromCharCode(bufferV[i]);
    }
    return oper;
  }
}

let arrayBuf = new ArrayBufferConverter();
console.log(arrayBuf.load(getBuffer()));
