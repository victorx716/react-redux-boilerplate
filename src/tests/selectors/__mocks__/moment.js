// import moment from "moment";

// force moment to start at specific point in time
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
  return moment(timestamp);
};

