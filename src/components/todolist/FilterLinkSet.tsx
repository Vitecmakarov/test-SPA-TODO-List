import React from 'react';
import { FILTERS } from '../../actions';
import FilterLink from './FilterLink';

// material-ui components
import { ButtonGroup  } from '@material-ui/core';

const FilterLinkSet = () => (
    <ButtonGroup>
        <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={FILTERS.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilterLink>
    </ButtonGroup>
);

export default FilterLinkSet;
