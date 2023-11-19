

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });
  
  
  ScrollReveal().reveal('.h1-object', { delay: 350 }); 
  ScrollReveal().reveal('.navbar', { delay: 5, origin: 'side' }); 
  ScrollReveal().reveal('.content', { delay: 650, origin: 'bottom' }); 
  ScrollReveal().reveal('.footer', { delay: 650, origin: 'top' }); 
  ScrollReveal().reveal('.profile', { delay: 650, origin: 'top' }); 

  document.getElementById('cardButton').addEventListener('click', function() {
    document.getElementById('cardContainer').style.display = 'block';
  });
  
  function closeCard() {
    console.log('Close button clicked');
    document.getElementById('cardContainer').style.display = 'none';
  }
  
  
  