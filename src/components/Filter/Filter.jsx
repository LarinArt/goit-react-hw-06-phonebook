import { useSelector, useDispatch } from 'react-redux';
import { FilterLabel, FilterText, FilterInput } from './Filter.style';
import { changeFilter, getFilter } from 'store/contacts-slice';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput type="text" value={filter} onChange={changeFieldFilter} />
    </FilterLabel>
  );
};
