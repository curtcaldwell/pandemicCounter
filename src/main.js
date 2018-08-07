
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
  $('#giphy').click(function() {
    let giph = $('#giph').val();
    $('#giph').val("");

    $.ajax({
    url: `https://api.giphy.com/v1/gifs/search?api_key=kU3fXtAlsbfi9Aso8BCZLyeD64FsA4N4&q=${giph}&limit=25&offset=0&rating=G&lang=en`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('.showHumidity').append(`<img src='${response.data[0].images.original.url}' />`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      // $('.lon').text(`The longitude is ${response.coord.lon}.`);
    },
    error: function() {
      $('#errors').text("There was an error processing your request. Please try again.");
    }
  });

    // let request = new XMLHttpRequest();
    // let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=puppy&limit=25&offset=0&rating=R&lang=en`;
    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     let response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // }
// var stillImage = response.data.images.fixed_height_still.url;
// var movingImage = response.data.images.fixed_height_small.url;
//     request.open("GET", url, true);
//     request.send();

    // let getElements = function(response) {
    //   $('.showHumidity').$({response.data.images.fixed_height_still.url});
    //   $('.showTemp').images$({response.data.images.fixed_height_small.url});
    // }

  });
});
