window.addEventListener('DOMContentLoaded', () => {
  const rendererTarget = "[RENDERER]";
  function tartgetRenderConsole(text) {
    console.log(`${rendererTarget}: ${text}`);
  }

  const btnElement = document.getElementById('btnToggle');

  btnElement.addEventListener('click', () => {
    window.electronAPI.send('cmd', JSON.stringify({
      name: 'toggle', 
      data : {

      }
    }));
  });

  window.electronAPI.on('cmd', (data) => {
    tartgetRenderConsole('Receive MAIN:', data);
  });
});