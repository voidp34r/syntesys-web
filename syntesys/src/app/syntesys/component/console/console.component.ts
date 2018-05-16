import { Component, OnInit } from '@angular/core';
import { IlegraService } from './ilegra/ilegra.service';
import { Schema } from 'schm';
const schema = require('schm');
import { FileSaver } from 'file-saver';
const FileSaver = require('file-saver');

const userSchema = schema(
  {
    name: String,
    age: {
      type: Number,
      adult: true
    },
    skills: Array
  },
  previous =>
    previous.merge({
      validators: {
        adult: value => ({
          valid: value >= 18,
          message: 'Not adult'
        })
      }
    })
);

const user = userSchema.parse({
  name: 'Haz',
  age: '17',
  height: '1.88',
  skills: ['code', 'design', 'astronomy']
});

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  items;
  dataItems;
  data;
  Schema: Schema;
  schema = schema;
  userSchema = userSchema;
  user = user;
  file;
  fileInput;
  ilegraS;
  constructor(ilegraS: IlegraService) {
    this.ilegraS = ilegraS;
    // console.log(Ilegra);
    userSchema.parse({
      name: 'voidp34r',
      age: '27',
      height: '1.72',
      skills: ['code', 'hack', 'sec']
    });
    const idItems = [' Item 1.1', ' Item 1.2', ' Item 1.3', ' Item 1.4'];
    const dataItems = [idItems, idItems, idItems, idItems];
    this.dataItems = [dataItems];
    this.items = [idItems];
    this.data = { id: '0000', data: 'data aqui', output: 'saida de dados :P' };
    // this.items.bind(this.data);
    // this.items.values('teste');
    // console.log(this.userSchema, this.user);
    // console.log(this.user);

  }

  ngOnInit() {
    // setTimeout( this.user = { name: 'matheusrs' }, 2000);
    // const data01 = this.ngValidate( this.userSchema, { name: 'John', age: 18 } );
    // console.log(data01);
    const fileInput = document.getElementById('fileInput');
    console.log();
    try {
      const isFileSaverSupported = !!new Blob;
    } catch (e) {}
    // const fileDisplayArea = document.getElementById('fileDisplayArea');
    // document.getElementById('fileInput').addEventListener('change', function(e) {
    //   console.log(e);
    //   console.log(e);
    //   console.log(e);
    // });
    // this.ilegraS.ngOnLoad();
    // this.ilegraS.ngOnLoad(['./data.txt']);
  }

  ngClick() {
    const file = new File(['//teste.txt'], 'teste.txt', {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(file);
    console.log(file);
  }
  ngFileList(file) {

  }

  ngFileReader(event, file) {
    console.log(file);
    console.log(event);
    // const foo = this.ilegraS.ngFileReader(file, event);
  }

  ngValidate(data, input, tipo?): void {
    data
      .validate(input)
      .then((res, param) => {
        console.log('Yeah!');
        console.log(res);
        console.log(param);
        return 1;
      })
      .catch((error, msg) => {
        console.log('NO! :/');
        console.log(error);
        console.log(msg);
        return 0;
      });
  }
}
