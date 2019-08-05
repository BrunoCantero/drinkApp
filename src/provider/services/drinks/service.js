import ServiceConfig from './config';

export default class DrinkService {
  static fetchDrinks() {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = ServiceConfig.endpoint;
        const response = await ServiceConfig.APIConnector.get(endpoint, {});

        if (response.code) {
          reject(response);
        } else {
          resolve(response);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}