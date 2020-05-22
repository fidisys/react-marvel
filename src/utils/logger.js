import { message } from 'antd';

message.config({ maxCount: 1 })

const logger = err => {
  if (err) {
    if (err.custommsg) {
      message.error(err.custommsg);
    } else if (!err.response) {
      message.error('Oops! Failed to fetch your data');
    }
  }

  if (err && err.response) {
    const { status } = err.response;
    switch (status) {
      case 400:
        if (err.response && err.response.data) {
          if (err.response.data.errors) {
            message.error(err.response.data.errors[0]);
          }
        }
        break;
      case 422:
        if (err.response && err.response.data) {
          if (err.response.data.errors) {
            message.error(err.response.data.errors[0]);
          }
        }
        break;
      case 404:
        if (err.response && err.response.data) {
          if (err.response.data.errors) {
            message.error(err.response.data.errors[0]);
          }
        }
        break;
      case 500:
        message.error('Oops! our servers went down. Try again :(');
        break;
      default:
        break;
    }
  }
};

export default logger;
