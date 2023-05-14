<script>
  function openMobileMenu() {
    // create an iframe element
    var iframe = document.createElement("iframe");
    // set the source to the mobile menu html
    iframe.src = "../interact/mobilemenu.html";
    // give it a class name
    iframe.className = "mobilemenu-iframe";
    
    // create a close button element
    var closeBtn = document.createElement("button");
    // set the text to X
    closeBtn.innerHTML = "X";
    // give it a class name
    closeBtn.className = "close-btn";
    
    // append the iframe and the close button to the body
    document.body.appendChild(iframe);
    document.body.appendChild(closeBtn);
    
    // add an event listener to the close button to remove the iframe and the button
    closeBtn.addEventListener("click", function() {
      document.body.removeChild(iframe);
      document.body.removeChild(closeBtn);
    });
  }
</script>
