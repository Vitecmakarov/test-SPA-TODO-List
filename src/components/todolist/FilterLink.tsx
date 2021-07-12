import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions';
import { IStoreState } from '../../reducer';

// material-ui components
import { Button } from '@material-ui/core';

// interfaces
interface IProps {
  selectedFilter: string;
  filter: string;
  onSetFilter: (filtername: string) => void;
  children?: string;
}

const FilterLink = ({ selectedFilter, filter, onSetFilter, children }: IProps) => {
  if (selectedFilter === filter) {
    return (
        <Button color="secondary" disabled={true}>
          {children}
        </Button>
    );
  }
  return (
      <Button
          color="primary"
          onClick={e => {
            e.preventDefault();
            onSetFilter(filter);
          }}
      >
        {children}
      </Button>
  );
};

const mapStateToProps = (state: IStoreState): { selectedFilter: string } => {
  return {
    selectedFilter: state.todolist.filter
  };
};

export default connect(mapStateToProps, {
  onSetFilter: setFilter
})(FilterLink);
