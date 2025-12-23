window.addEventListener('DOMContentLoaded', () => {
  const rendererTarget = "[RENDERER]";
  function tartgetRendererConsole(text) {
    console.log(`${rendererTarget}: ${text}`);
  }

  const btnElement = document.getElementById('btnToggle');

  btnElement?.addEventListener('click', () => {
    window.electronAPI.send('cmd', JSON.stringify({
      name: 'toggle', 
      data : {
        message: 'Hello from Renderer Process!'
      }
    }));
  });

  window.electronAPI.on('cmd', (data) => {
    tartgetRendererConsole(`Receive [MAIN]: ${data}`);
  });
});