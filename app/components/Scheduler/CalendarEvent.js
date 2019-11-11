import React from 'react';
import PropTypes from 'prop-types';

const Event = ({
  styleName,
  bodyInfo,
  title,
  secondTitleInfo,
  secondBodyInfo,
  event,
  onLeave,
  eventClick
}) => {
  return (
    <div className={styleName} style={styles.mainContainer}>
      <div
        style={{
          backgroundColor: '#6a738a',
          height: '17px',
          borderRadius: '3px 3px 0 0',
          fontSize: '0.8rem',
          paddingLeft: '3px',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <div>{title}</div>
        <div
          style={{
            color: '#FF9800',
            fontWeight: 'bold',
            marginLeft: 'auto',
            fontFamily: 'sans-serif',
            padding: '0 5px'
          }}
        >
          {secondTitleInfo}
        </div>
      </div>
      <div
        role="presentation"
        style={styles.eventStyle}
        onMouseLeave={onLeave}
        onFocus={() => {}}
        onClick={e => eventClick(e, event)}
      >
        <div>{bodyInfo}</div>
        <div style={{ marginLeft: 'auto' }}>{secondBodyInfo}</div>
      </div>
    </div>
  );
};

Event.propTypes = {
  styleName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  secondTitleInfo: PropTypes.string,
  secondBodyInfo: PropTypes.string.isRequired,
  onLeave: PropTypes.func.isRequired,
  bodyInfo: PropTypes.string.isRequired,
  eventClick: PropTypes.func.isRequired,
  event: PropTypes.instanceOf(Object).isRequired
};

Event.defaultProps = {
  secondTitleInfo: ''
};

const getMomentLabel = moment => {
  let response = 'No title.';
  switch (moment) {
    case 'morning':
      response = 'Mañana';
      break;
    case 'afternoon':
      response = 'Tarde';
      break;
    case 'night':
      response = 'Noche';
      break;
    default:
      break;
  }

  return response;
};

const buildEventData = event => {
  const response = {
    styleName: '',
    bodyInfo: '',
    title: '',
    secondTitleInfo: '',
    secondBodyInfo: ''
  };
  switch (event.type) {
    case 'preaching':
      response.styleName = `${event.type}-${event.moment}`;
      response.title = getMomentLabel(event.moment);
      response.secondTitleInfo = 'P';
      response.bodyInfo = event.location;
      response.secondBodyInfo = `${event.time}`;
      break;

    case 'meeting':
      response.styleName = `${event.type}-${event.meetingType}`;
      response.bodyInfo = `${event.title}`;
      response.secondTitleInfo = 'R';
      response.secondBodyInfo = `${event.time}`;
      response.title = 'Reunion';
      break;

    default:
      break;
  }

  return { ...response };
};

const CalendarEvent = ({ onLeave, calendarEvent, eventClick }) => {
  const {
    styleName,
    bodyInfo,
    title,
    secondBodyInfo,
    secondTitleInfo
  } = buildEventData(calendarEvent);
  return (
    <Event
      styleName={styleName}
      bodyInfo={bodyInfo}
      event={calendarEvent}
      title={title}
      secondTitleInfo={secondTitleInfo}
      secondBodyInfo={secondBodyInfo}
      onLeave={onLeave}
      eventClick={eventClick}
    />
  );
};

const styles = {
  mainContainer: {
    borderRadius: '3px'
  },
  eventStyle: {
    zIndex: '2',
    margin: '2px 3px',
    fontSize: '14px',
    color: 'white',
    display: 'flex',
    flexDirection: 'row'
  }
};

CalendarEvent.propTypes = {
  onLeave: PropTypes.func.isRequired,
  calendarEvent: PropTypes.instanceOf(Object).isRequired,
  eventClick: PropTypes.func.isRequired
};

export default CalendarEvent;
