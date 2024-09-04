const nav = document.getElementById('Bar');

nav.addEventListener("click", () => {
    
    const navList = document.getElementById('nav-links');
    const backgroundNav = document.getElementById('bg-nav');

    
     if(navList.style.display === 'block'){
        navList.style.display = 'none';
        backgroundNav.style.display = 'none';
     } else{
        navList.style.display = 'block';
        backgroundNav.style.display = 'block';
        backgroundNav.style.zIndex = '3';
        navList.style.zIndex = '3';
        nav.style.zIndex ='5';
        backgroundNav.style.position = 'fixed';
        backgroundNav.style.height = '750px';

     }
      
    
    });