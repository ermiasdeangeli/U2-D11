  function getCounter() {
    return sessionStorage.getItem('counter') || 0;
  }


  function updateCounter() {
    setInterval(() => {
      let counter = getCounter();
      counter++;
      sessionStorage.setItem('counter', counter);
      console.log('Contatore:', counter);
    }, 1000); 
  }

  updateCounter();
