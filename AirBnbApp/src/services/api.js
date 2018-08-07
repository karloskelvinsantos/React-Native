import axios from 'axios';
import { AsyncStorage } from 'react-native';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/

const api = axios.create({
    baseURL: 'https://airbnb-server.herokuapp.com/',
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@AirBnbApp:token');

    if (token) {
      config.headers.Authorization = `Baerer ${token}`;
    }

    return config;
  } catch (error) {
    alert(error);
  }
});

export default api;

