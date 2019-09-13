import React, { useState, Suspense } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropsTypes from 'prop-types';
import CustomToolBar from '../CustomToolBar/CustomToolBar';
import MonthOptions from './MonthOptions';
import DialogFormOptions from './DialogFormOptions';
// import AddEventComponent from './AddEventComponent';
// import { getWeekOptionsLabel } from './CalendarTools';
import MonthCalendar from './MonthCalendar';

moment.locale('es');

// TODO: Replace the way to add Components types.
// const calendars = {
//     month: MonthCalendar,
//     week: WeekCalendar,
//     day: DayCalendar
// }

// const options = {
//     month: MonthOptions,
//     week: WeekCalendar,
//     day: DayCalendar
// }

//  Note: According the requirement only Month we commented the code for Day and Week.
// <MenuItem value={'day'}>Day</MenuItem>
// <MenuItem value={'week'}>Week</MenuItem>

const CalendarOptions = ({ setCalendarType, options }) => {
  const [currentDay] = useState(moment().format('dddd LL'));
  const [type, setType] = useState('month');

  const handleChange = newValue => {
    setType(newValue);
    setCalendarType(newValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'flex-start'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '40%',
          justifyContent: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            style={{ margin: 0, fontWeight: 'bold', fontSize: '1.2rem' }}
            gutterBottom
          >
            {currentDay.charAt(0).toUpperCase() + currentDay.slice(1)}
          </Typography>
        </div>
      </div>
      <FormControl style={{ display: 'flex', alignSelf: 'center' }}>
        <Select
          value={type}
          onChange={e => handleChange(e.target.value)}
          displayEmpty
          name="type"
        >
          <MenuItem value="month">Mes</MenuItem>
        </Select>
      </FormControl>
      {options}
    </div>
  );
};

CalendarOptions.propTypes = {
  setCalendarType: PropsTypes.func,
  options: PropsTypes.instanceOf(Object)
};

CalendarOptions.defaultProps = {
  setCalendarType: () => {},
  options: {}
};

const Scheduler = () => {
  const mainDate = moment();
  mainDate.startOf(mainDate.year());
  const [selectedCalendar, setSelectedCalendar] = useState('month');
  const [data, setData] = useState(mainDate);
  // const [openFullScreenDialog, setOpenFullScreenDialog] = useState(false);

  const next = type => {
    setData(getNewData(type, 'add'));
  };

  const previous = type => {
    setData(getNewData(type, 'subtract'));
  };

  // TODO: Priority we need to get data including the Year.
  const getNewData = (type, action) => {
    let response = {};
    switch (type) {
      case 'month':
        response = data.clone()[action](1, 'month');
        break;
      // case 'week':
      //   response = data.clone()[action](1, 'week');
      //   break;
      // case 'day':
      //   response = data.clone()[action](1, 'days');
      //   break;
      default:
        break;
    }

    return response;
  };

  const getCalendar = type => {
    let response = {};

    switch (type) {
      // TODO: That code to use other calendars.
      // case 'day':
      //   response = lazy(() => import('./DayCalendar'));
      //   break;
      // case 'week':
      //   response = lazy(() => import('./WeekCalendar'));
      //   break;
      case 'month':
        response = MonthCalendar;
        break;
      default:
        break;
    }

    return response;
  };

  const getCalendarOptions = type => {
    let response = {};

    switch (type) {
      // TODO: Use that code for other calendar type options.
      // case 'day':
      //   response = lazy(() => import('./DayOptions'));
      //   break;
      // case 'week':
      //   response = lazy(() => import('./WeekOptions'));
      //   break;
      case 'month':
        response = MonthOptions;
        break;
      default:
        break;
    }

    return response;
  };

  // const calculateWeekLabel = () => {
  //   const { startDate, endDate } = getWeekOptionsLabel(data);
  //   return `${startDate.format('MMMM DD YYYY')} - ${endDate.format(
  //     'MMMM DD YYYY'
  //   )}`;
  // };

  const getOptionLabel = () => {
    let response = '';
    switch (selectedCalendar) {
      // case 'day':
      //   response = data.format('MMMM DD YYYY');
      //   break;
      // case 'week':
      //   response = calculateWeekLabel();
      //   break;
      case 'month':
        response = data.format('MMMM YYYY');
        break;
      default:
        break;
    }

    return response;
  };

  // const handleDialogs = (isOpen, dialogType) => {
  //   switch (dialogType) {
  //     case 'preaching':
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const Calendar = getCalendar(selectedCalendar);
  const Options = getCalendarOptions(selectedCalendar);
  const optionLabel = getOptionLabel();

  return (
    <div>
      <CustomToolBar
        title="Eventos"
        additionalComponent={
          <CalendarOptions
            label={`${data.format('MMMM')} ${data.format('YYYY')}`}
            setCalendarType={setSelectedCalendar}
            options={
              <Options label={optionLabel} next={next} previous={previous} />
            }
            previous={previous}
          />
        }
      />
      <div style={styles.main}>
        <Paper elevation={1} style={styles.paper}>
          <div style={styles.calendarContainer}>
            <Suspense fallback={<div>Loading...</div>}>
              <Calendar data={data} optionsDialog={DialogFormOptions} />
            </Suspense>
          </div>
        </Paper>
      </div>
    </div>
  );
};

const styles = {
  main: {
    padding: '5px',
    width: '100%',
    height: 'calc(100vh - 90px)',
    overflow: 'hidden'
  },
  paper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  calendarContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%'
  },
  defaultMargin: {
    margin: '0 5px'
  },
  buttonNavigation: {
    border: '1px solid rgb(106, 115, 138)',
    borderRadius: '0 5px 5px 0'
  }
};

export default Scheduler;
