/* eslint-disable no-new */
import MonthCalendarData from './MonthCalendarData';

const getCalendarDataByType = calendarOption => {
  const dataResponse = {};
  switch (calendarOption) {
    case 'month':
      new MonthCalendarData();
      break;

    default:
      break;
  }

  return dataResponse;
};

export default getCalendarDataByType;
