window.addEventListener('DOMContentLoaded', () => {
  const rendererTarget = '[RENDERER]';
  function targetRendererConsole(text: string) {
    console.log(`${rendererTarget}: ${text}`);
  }

  const btnElement: HTMLButtonElement | null = document.getElementById('btnToggle') as HTMLButtonElement | null;

  btnElement?.addEventListener('click', () => {
    window.electronAPI.send('cmd', JSON.stringify({
      name: 'toggle',
      data: {
        message: 'Hello from Renderer Process!'
      }
    }));
  });

  window.electronAPI?.on('cmd', (data: any) => {
    targetRendererConsole(`Receive [MAIN]: ${data}`);
  });
});
