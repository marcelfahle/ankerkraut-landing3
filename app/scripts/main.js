var ls = document.getElementsByClassName( 'section--linked' );
for (var i = 0; i<ls.length; i++) {
  var anchors = ls[i].getElementsByClassName('setlist__item-order-button');
  for(var j=0; j < anchors.length; j++){
    anchors[j].onclick = function(e){ e.preventDefault();}
  }
  ls[i].onclick = function() {
    //location.href = this.dataset.href;
    window.open(this.dataset.href, '_self' );
  }
}

