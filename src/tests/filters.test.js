import moment from 'moment';
import { setStartDate, setEndDate, sortByAmoumt, sortByDate, setTextFiler} from '../../actions/filters';

test('should generate set start date', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});


test('should generate set filter object', () => {
  const action = setTextFiler('Something In');
  expect(action).toEqual({
    type: 'SET_TEXT_FILER',
    text: 'Something In'
  })
});


test('should generate set filter object', () => {
  const action = setTextFiler('Something In');
  expect(action).toEqual({
    type: 'SET_TEXT_FILER',
    text: 'Something In'
  })
});

test('should generate set filter object with default', () => {
  const action = setTextFiler('Something In');
  expect(action).toEqual({
    type: 'SET_TEXT_FILER',
    text: ''
  })
});

test('should generate set filter object with default', () => {
  const action = setTextFiler('Something In');
  expect(action).toEqual({
    type: 'SET_TEXT_FILER',
    text: ''
  })
});

test('should generate action object for sort by date', ()=> {
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('should generate action object for sort by amount', ()=> {
  expect(sortByAmoumt().toEqual({type: 'SORT_BY_AMOUNT'}));
});

