import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myapp',
  appName: 'My App',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
