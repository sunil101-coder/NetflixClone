const  Scroll =()=>{
    var mybutton = document.getElementById("mybutton");

    // When the user scrolls down 20px from the top of the document, show the button
    mybutton.addEventListener('click',function scroll(){
        window.scrollTo(0,0)
    })
    // When the user clicks on the button, scroll to the top of the document
        
};
export default Scroll