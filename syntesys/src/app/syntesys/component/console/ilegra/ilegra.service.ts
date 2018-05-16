import { Injectable } from '@angular/core';

@Injectable()
export class IlegraService {
  constructor() {}

  ngVoid() {
    console.log('deu!');
    const fileReader = new FileReader();
    console.log(fileReader);
    return 'deu tambem!';
  }

  ngOnLoad(file) {
    function getAsText(readFile) {
      const reader = new FileReader();
      // Read file into memory as UTF-16
      reader.readAsText(readFile, 'UTF-16');
      // Handle progress, success, and errors
      reader.onprogress = updateProgress;
      // reader.onload = loaded;
      reader.onerror = errorHandler;
    }

    function updateProgress(evt) {
      if (evt.lengthComputable) {
        // evt.loaded and evt.total are ProgressEvent properties
        const loaded = (evt.loaded / evt.total);
        if (loaded < 1) {
          // Increase the prog bar length
          // style.width = (loaded * 200) + "px";
        }
      }
    }

    function errorHandler(evt) {
      if (evt.target.error.name === 'NotReadableError') {
        // The file could not be read
      }
    }

    return getAsText(file);
  }

  ngFileReader(fileReader, evento) {
    fileReader.onload = function(event) {
      const contents = 'Matheus'; // event.target.result;
      console.log('File contents: ' + contents);
    };
  }
}
