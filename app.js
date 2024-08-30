

    // Log required form
    
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


        // Nav bar
  const navBar = document.getElementById('nav-bar');
  const navFun = document.getElementById('list-nav');
  const backGnav = document.getElementById('backg-nav');


    
      navBar.addEventListener('click', () =>{
     
     if(navFun.style.display === 'block')
      
      {
      navFun.style.display = 'none';
      backGnav.style.backgroundColor= 'transparent';
      backGnav.style.display = 'none';

  
     }else{
      navFun.style.display = 'block';
      backGnav.style.display = 'block';
      backGnav.style.backgroundColor = '#0301016b';
      backGnav.style.width = '105vw';
      backGnav.style.height = '500vw';
      backGnav.style.position = 'fixed';
      backGnav.style.right= '0px';
      backGnav.style.left = '0px';
  
     }
  });




      


