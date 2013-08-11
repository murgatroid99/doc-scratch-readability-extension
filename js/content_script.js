(function(){
  "use strict";

  function runScript(){
    var list = document.querySelectorAll('.spoiler span[style*="color: #FFFFFF"]');
    var list2 = document.querySelectorAll('.spoiler span[style*="color: #ffffff"]');
    for(var i=0; i<list.length; i++){
      list[i].style.background = "transparent";
      list[i].onmouseover = function(){this.style.background="green";};
      list[i].onmouseout = function(){this.style.background="transparent";};
    }
    for(var i=0; i<list2.length; i++){
      list2[i].style.background = "transparent";
      list2[i].onmouseover = function(){this.style.background="green";};
      list2[i].onmouseout = function(){this.style.background="transparent";};
    }
  }

  runScript();
}());
