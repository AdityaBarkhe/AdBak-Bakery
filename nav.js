/* Navigation autohide*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function () 
{
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) 
    {
        document.getElementById("navbar").classList.remove("nav-hidden"); 
        /* remove the nav-hidden class to show the navigation bar */
    } 
    else 
    {
        document.getElementById("navbar").classList.add("nav-hidden"); 
        /* add the nav-hidden class to hide the navigation bar */
    }
    prevScrollpos = currentScrollPos;

}

 