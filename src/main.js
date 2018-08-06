
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pandemic } from './pandemic.js';

$(document).ready(function() {
  const pandemic = new Pandemic("Eddie");
  pandemic.popManipulator();

$("#nuke").click(function() {
  pandemic.nuke();
  });

$("#cure").click(function() {
  pandemic.curePop();
});

$("#med").click(function() {
  pandemic.medicine();
});

$("#mut").click(function() {
  pandemic.mutation();
});




  //$("#population").append(this.popManipulator);

  // $().submit(function(event) {
  //   event.preventDefault();
  //
  //
  // })
})
