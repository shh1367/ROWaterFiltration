import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In the Base44 sandbox the preview is served through a proxy whose host name
// changes between sessions, so allow the sandbox host wildcard only while
// BASE44_PREVIEW_MODE is exactly "1". Unset/any other value keeps Vite's default.
const sandboxHost = process.env.BASE44_SANDBOX_HOST_DOMAIN;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts:
      process.env.BASE44_PREVIEW_MODE === '1' && sandboxHost
        ? ['localhost', `.${sandboxHost}`]
        : ['localhost'],
  },
});
