
document.getElementById('Bar').addEventListener("click", () => {
    const navList = document.getElementById('nav-links');
    const backgroundNav = document.getElementById('bg-nav');
    
     if(navList.style.display === 'block'){
        navList.style.display = 'none';
        backgroundNav.style.display = 'none'
     } else{
        navList.style.display = 'block'
        backgroundNav.style.display = 'block'
     }
      
    
    });