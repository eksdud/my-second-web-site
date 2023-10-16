var Body = {
    setColor: function(color){
      $('body').css('color', color);
      $('h1').css('color', color);},
    setBackgroundColor: function(color){
      $('body').css('background-color', color);}
    }

var Links = {
    setColor : function(color){
      $('a').css('color', color);}
    }

function nightDayHandler(self){
    if(self.value=='night'){
        Body.setBackgroundColor('rgb(22, 22, 85)');
        Body.setColor('powderblue');
        Links.setColor('white');
        self.value='morning';}
    else{Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        self.value='night';}}