import { createSelector } from 'reselect';

const selectDirectory = state => state.directory; // will return the directory

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections // outputs the sections of the directory
);