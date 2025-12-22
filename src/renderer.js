window.addEventListener('DOMContentLoaded', () => {
  const btnElement = document.getElementById('btnToggle');

  btnElement.addEventListener('click', () => {
    window.electronAPI.send('cmd', JSON.stringify({
      name: 'toggle', 
      data : {

      }
    }));
  });
});