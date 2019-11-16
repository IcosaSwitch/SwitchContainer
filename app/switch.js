const $ = require('jquery');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const html2canvas = require("html2canvas");
let ui = path.join(__dirname, "theme", "ui");
let screenshot = path.join(__dirname, "screenshot.png");
let manifest;
let emitter = require('events').EventEmitter;
let switchem = new emitter();
$(function() {
  $.fn.ctrlCmd = function(key) {
    var allowDefault = true;
    if (!$.isArray(key)) {
      key = [key];
    }
    return this.keydown(function(e) {
      for (var i = 0, l = key.length; i < l; i++) {
        if(e.keyCode === key[i].toUpperCase().charCodeAt(0) && e.metaKey) {
          allowDefault = false;
        }
      };
      return allowDefault;
    });
  };
  $.fn.disableSelection = function() {
    this.ctrlCmd(['a', 'c']);
    return this.attr('unselectable', 'on')
     .css({'-moz-user-select':'-moz-none',
           '-moz-user-select':'none',
           '-o-user-select':'none',
           '-khtml-user-select':'none',
           '-webkit-user-select':'none',
           '-ms-user-select':'none',
           'user-select':'none'})
     .bind('selectstart', false)
     .on('mousedown', false);
  };
  let keysdown = {};
  $(document).keydown(function(e){
    if(e.which === 38){
      arrowup();
      e.preventDefault();
    } if(e.which === 40){
      arrowdown();
      e.preventDefault();
    } if(e.which === 37){
      arrowleft();
      e.preventDefault();
    } if(e.which === 39){
      arrowright();
      e.preventDefault();
    }
    if(keysdown[e.which]) return;
    keysdown[e.which] = true;
    if(e.which === 80){
      power();
    }
    $(this).on('keyup', function() {
      delete keysdown[e.which];
    });
  });
  console.log('JQuery Initialized.');
  $("#plus").click(() => {
    plus();
  });
  $("#pluss").click(() => {
    plus();
  });
  $("#plusss").click(() => {
    plus();
  });
  $("#minus").click(() => {
    minus();
  });
  $("#arrowup").click(() => {
    arrowup();
  });
  $("#arrowdown").click(() => {
    arrowdown();
  });
  $("#arrowleft").click(() => {
    arrowleft();
  });
  $("#arrowright").click(() => {
    arrowright();
  });
  $("#capturebg").click(() => {
    capture();
  });
  $("#capture").click(() => {
    capture();
  });
  $("#l").click(() => {
    l();
  });
  $("#a").click(() => {
    a();
  });
  $("#b").click(() => {
    b();
  });
  $("#x").click(() => {
    x();
  });
  $("#y").click(() => {
    y();
  });
  $("#home").click(() => {
    home();
  });
  $("#r").click(() => {
    r();
  });
  $("#volp").click(() => {
    volp();
  });
  $("#volm").click(() => {
    volm();
  });
  $("#power").click(() => {
    power();
  });
  $('#ltop').on('mousedown', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:0;left:-20");
    ltopstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    ltopstop();
  });
  $('#ltopleft').on('mousedown', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:0;left:-40");
    ltopleftstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    ltopleftstop();
  });
  $('#lleft').on('mousedown', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-40");
    lleftstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    lleftstop();
  });
  $('#lleftbottom').on('mousedown', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:40;left:-40");
    lleftbottomstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    lleftbottomstop();
  });
  $('#lbottom').on('mousedown', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:40;left:-20");
    lbottomstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    lbottomstop();
  });
  $('#lbottomright').on('mousedown', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:40;left:0");
    lbottomrightstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    lbottomrightstop();
  });
  $('#lright').on('mousedown', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:0");
    lrightstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    lrightstop();
  });
  $('#lrighttop').on('mousedown', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:0;left:0");
    lrighttopstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("ljoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    lrighttopstop();
  });
  $('#rtop').on('mousedown', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:0;left:-20");
    rtopstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    rtopstop();
  });
  $('#rtopleft').on('mousedown', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:0;left:-40");
    rtopleftstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    rtopleftstop();
  });
  $('#rleft').on('mousedown', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-40");
    rleftstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    rleftstop();
  });
  $('#rleftbottom').on('mousedown', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:40;left:-40");
    rleftbottomstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    rleftbottomstop();
  });
  $('#rbottom').on('mousedown', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:40;left:-20");
    rbottomstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    rbottomstop();
  });
  $('#rbottomright').on('mousedown', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:40;left:0");
    rbottomrightstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    rbottomrightstop();
  });
  $('#rright').on('mousedown', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:0");
    rrightstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    rrightstop();
  });
  $('#rrighttop').on('mousedown', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:0;left:0");
    rrighttopstart();
  }).on('mouseup mouseleave', function() {
    document.getElementById("rjoybutton").setAttribute("style", "position:relative;top:20;left:-20");
    rrighttopstop();
  });
  $('#a').disableSelection();
  $('#b').disableSelection();
  $('#y').disableSelection();
  $('#x').disableSelection();
  init();
})

async function init(){
  switchem.on("capture", () => {
    html2canvas(document.getElementById("switchcontainer"), {
        width: 1280,
        height: 720
    }).then(canvas => {
      canvas.setAttribute("style", "width:1280;height:720;visiblity: hidden;");
      document.body.appendChild(canvas);
      let img = $("canvas").get(0).toDataURL();
      let data = img.replace(/^data:image\/\w+;base64,/, "");
      let buf = Buffer.from(data, 'base64');
      fs.writeFileSync(path.join(__dirname, "screenshot.png"), buf, (err) => {if(err) throw err});
      document.body.removeChild(canvas);
    });
  });
}

let ispower = true;
function minus(){
  if(!ispower) return
  switchem.emit('minus');
}
function plus(){
  if(!ispower) return
  switchem.emit('plus');
}
function ltopstart(){
  if(!ispower) return
  switchem.emit('ltopstart');
}
function ltopstop(){
  if(!ispower) return
  switchem.emit('ltopstop');
}
function ltopleftstart(){
  if(!ispower) return
  switchem.emit('ltopleftstart');
}
function ltopleftstop(){
  if(!ispower) return
  switchem.emit('ltopleftstop');
}
function lleftstart(){
  if(!ispower) return
  switchem.emit('lleftstart');
}
function lleftstop(){
  if(!ispower) return
  switchem.emit('lleftstop');
}
function lleftbottomstart(){
  if(!ispower) return
  switchem.emit('lleftbottomstart');
}
function lleftbottomstop(){
  if(!ispower) return
  switchem.emit('lleftbottomstop');
}
function lbottomstart(){
  if(!ispower) return
  switchem.emit('lbottomstart');
}
function lbottomstop(){
  if(!ispower) return
  switchem.emit('lbottomstop');
}
function lbottomrightstart(){
  if(!ispower) return
  switchem.emit('lbottomrightstart');
}
function lbottomrightstop(){
  if(!ispower) return
  switchem.emit('lbottomrightstop');
}
function lrightstart(){
  if(!ispower) return
  switchem.emit('lrightstart');
}
function lrightstop(){
  if(!ispower) return
  switchem.emit('lrightstop');
}
function lrighttopstart(){
  if(!ispower) return
  switchem.emit('lrighttopstart');
}
function lrighttopstop(){
  if(!ispower) return
  switchem.emit('lrighttopstop');
}
function arrowup(){
  if(!ispower) return
  switchem.emit('arrowup');
}
function arrowdown(){
  if(!ispower) return
  switchem.emit('arrowdown');
}
function arrowright(){
  if(!ispower) return
  switchem.emit('arrowright');
}
function arrowleft(){
  if(!ispower) return
  switchem.emit('arrowleft');
}
function capture(){
  if(!ispower) return
  switchem.emit('capture');
}
function l(){
  if(!ispower) return
  switchem.emit('l');
}
function rtopstart(){
  if(!ispower) return
  switchem.emit('rtopstart');
}
function rtopstop(){
  if(!ispower) return
  switchem.emit('rtopstop');
}
function rtopleftstart(){
  if(!ispower) return
  switchem.emit('rtopleftstart');
}
function rtopleftstop(){
  if(!ispower) return
  switchem.emit('rtopleftstop');
}
function rleftstart(){
  if(!ispower) return
  switchem.emit('rleftstart');
}
function rleftstop(){
  if(!ispower) return
  switchem.emit('rleftstop');
}
function rleftbottomstart(){
  if(!ispower) return
  switchem.emit('rleftbottomstart');
}
function rleftbottomstop(){
  if(!ispower) return
  switchem.emit('rleftbottomstop');
}
function rbottomstart(){
  if(!ispower) return
  switchem.emit('rbottomstart');
}
function rbottomstop(){
  if(!ispower) return
  switchem.emit('rbottomstop');
}
function rbottomrightstart(){
  if(!ispower) return
  switchem.emit('rbottomrightstart');
}
function rbottomrightstop(){
  if(!ispower) return
  switchem.emit('rbottomrightstop');
}
function rrightstart(){
  if(!ispower) return
  switchem.emit('rrightstart');
}
function rrightstop(){
  if(!ispower) return
  switchem.emit('rrightstop');
}
function rrighttopstart(){
  if(!ispower) return
  switchem.emit('rrighttopstart');
}
function rrighttopstop(){
  if(!ispower) return
  switchem.emit('rrighttopstop');
}
function a(){
  if(!ispower) return
  switchem.emit('a');
}
function b(){
  if(!ispower) return
  switchem.emit('b');
}
function x(){
  if(!ispower) return
  switchem.emit('x');
}
function y(){
  if(!ispower) return
  switchem.emit('y');
}
function home(){
  if(!ispower) return
  switchem.emit('home');
}
function r(){
  if(!ispower) return
  switchem.emit('r');
}
function volp(){
  if(!ispower) return
  switchem.emit('volp');
}
function volm(){
  if(!ispower) return
  switchem.emit('volm');
}
let istounpower = false;
let istopower = false;
let ispowerpressed = false;
async function power(){
  switchem.emit('power');
  let main = document.getElementById("switchcontainer");
  ispowerpressed = true;
  if(ispower){
    unpower();
  } else {
    onpower();
  }
  function unpower(){
    if(istounpower) return;
    ispowerpressed = false;
    document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.875;");
    istounpower = true
    $('#main').find('input, textarea, button, select').prop('disabled', true);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.75;")}, 25);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.625;")}, 50);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.50;")}, 75);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.375;")}, 100);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.25;")}, 125);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.125;")}, 150);
    setTimeout(() => {
      document.getElementById("switchcontainer").setAttribute("style", "opacity: 0;");
      istounpower = false;
      ispower = false;
      if(ispowerpressed){
        onpower();
        ispowerpressed = false;
      }
    }, 175);
  }
  function onpower(){
    if(istopower) return;
    ispowerpressed = false;
    document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.125;");
    istopower = true
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.25;")}, 25);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.375;")}, 50);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.50;")}, 75);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.625;")}, 100);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.75;")}, 125);
    setTimeout(() => {document.getElementById("switchcontainer").setAttribute("style", "opacity: 0.875;")}, 150);
    setTimeout(() => {
      document.getElementById("switchcontainer").setAttribute("style", "opacity: 1;");
      istopower = false;
      ispower = true;
      $('#main').find('input, textarea, button, select').prop("disabled", false);
      if(ispowerpressed){
        unpower();
        ispowerpressed = false;
      }
    }, 175);
  }
}
