// Default user location information

export const DEFAULT_LOCATION = 'DEFAULT_LOCATION';
export const defaultLocation = location => ({
  type: DEFAULT_LOCATION,
  location
});

export const SEARCH_LOCATION = 'SEARCH_LOCATION';
export const searchLocation = location => ({
  type: SEARCH_LOCATION,
  location
});

export const setDefaultLocation = locationObj => dispatch => {
  // console.log(locationObj);
  dispatch(defaultLocation(locationObj));
};

export const setSearchLocation = locationObj => dispatch => {
  // console.log(locationObj);
  dispatch(searchLocation(locationObj));
};


