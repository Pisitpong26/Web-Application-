function receiveMess() {
  var x = new Date()
  postMessage(x)
  setTimeout("receiveMess()",1000);
}
receiveMess();
