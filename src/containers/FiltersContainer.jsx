import React from 'react';
import styled from 'styled-components';
import CheckBox from '../components/styled-component/CheckBox';
import FilterList from '../components/styled-component/FilterList';
import { filterState } from '../initialState';

const FiltersWrapper = styled.aside`
    background-color: white;
    margin-bottom: 1rem;
    padding: 1em;
    border-radius: .28571429rem;
    border: 1px solid #e7e7e7;

    h3{
        font-size: 17px;
        margin: 0px 0px 14px 0px;
    }
    hr{
        margin: 10px 0px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid rgba(255,255,255,.1);
    }
    @media (max-width: 1110px) {
      display: none;
    }
`;

function FiltersContainer() {
  return (
    <FiltersWrapper>
      <h3>Filters</h3>
      <section className="top-section">
        <CheckBox title="Book a Table" />
        <hr />
        <CheckBox title="Zomato Gold Partner" />
        <hr />
        <CheckBox title="Order Food Online" />
      </section>
      <FilterList title="Sort by" items={filterState.sortBy} />
      <FilterList title="Category" items={filterState.category} />
      <FilterList title="Location" items={filterState.location} />
      <FilterList title="Cuisine" items={filterState.cuisine} />
      <FilterList title="Establishment Type" items={filterState.establishment} />
      <FilterList title="Cost for two" items={filterState.costForTwo} />
      <FilterList title="Restaurant Offers" checked checkItems={filterState.restaurantsOffer} />
      <FilterList title="More filters" checked checkItems={filterState.moreFilters} />

    </FiltersWrapper>
  );
}

export default FiltersContainer;
