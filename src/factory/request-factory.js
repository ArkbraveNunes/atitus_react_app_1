import axios from 'axios';

export default class RequestFactory {
  constructor({ baseUrl, auth, headers, timeout } = {}) {
    this.axios = axios.create({
      baseURL: baseUrl || '',
      auth: auth || null,
      headers: headers || null,
      timeout: timeout || 10000,
    });
  }

  getInstance() {
    return this.axios;
  }

  post(
    url = null,
    data = null,
    config = { auth: null, headers: {}, timeout: this.timeout }
  ) {
    return this.axios.post(url, data, config).then(result => result.data);
  }

  get(url = null, config = { auth: {}, headers: {} }) {
    return this.axios.get(url, config).then(result => result.data);
  }

  put(url = null, data = null, config = { auth: {}, headers: {} }) {
    return this.axios.put(url, data, config).then(result => result.data);
  }

  patch(url = null, data = null, config = { auth: {}, headers: {} }) {
    return this.axios.patch(url, data, config).then(result => result.data);
  }

  delete(url = null, config = { auth: {}, headers: {} }) {
    return this.axios.delete(url, config).then(result => result.data);
  }

//   errorHandler(error) {
//     if (error.code) {
//       switch (error.code) {
//         case ErrorAxiosEnum.ECONNABORTED:
//           this.resultError = Boom.badRequest(
//             'Timeout Error: Excedido o tempo limite de 10000 ms.'
//           ).output.payload;
//           break;
//         case ErrorAxiosEnum.ECONNREFUSED:
//           this.resultError = Boom.internal().output.payload;
//           this.resultError.message =
//             'Internal Error: Erro interno de comunicação entre apis.';
//           break;
//         default:
//           this.resultError = Boom.internal().output.payload;
//           this.resultError.message = 'Erro desconhecido.';
//           break;
//       }
//     } else if (error.response) {
//       this.resultError = error.response.data;
//     } else {
//       this.resultError = Boom.internal().output.payload;
//     }
//     return this.resultError;
//   }
};
