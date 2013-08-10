(function(){
  "use strict";

  function runScript(){
    var list = document.querySelectorAll('.spoiler span[style*="color: #FFFFFF"]');
    for(var i=0; i<list.length; i++){
      list[i].style.background = "transparent";
      list[i].onmouseover = function(){this.style.background="green";};
      list[i].onmouseout = function(){this.style.background="transparent";};
    }
  }

  runScript();
}());
