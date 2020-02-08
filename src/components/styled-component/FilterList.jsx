import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CheckBox from './CheckBox'


const FilterListWrapper = styled.section`
    h4{ 
        font-size: 15px;
        margin: 0px; 
        padding-bottom: 5px;  
    }
    ul{
        list-style: none;
        padding: 0px;
        margin-top: 0px; 
        font-size: 13px;
        color: #33373D;
        span{
           color: #89959B;
        }
    }
`

const Item = styled.li`
    .count{
        float: right;
    }
    &:hover{
        color: #cb202d;
        cursor: pointer;
    }
    &.active{
        color: #099e44;
        font-family: 'OpenSans Bold';
    }

`

function FilterList({ title, items, checked, checkItems }) {
    return (
        <FilterListWrapper>
            <h4>{title}</h4>
            <ul>{checked
                ? checkItems.map((item) => <CheckBox title={item} />)
                : items.map((item, index) => (
                    <Item className={index === 0 ? 'active' : ''} >
                        {item.title}
                        {item.sub ? <span className="sub"> - {item.sub}</span> : ''}
                        {item.count ? <span className="count">{item.count}</span> : ''}
                    </Item>
                ))}
            </ul>
        </FilterListWrapper>
    )
}

FilterList.propTypes = {
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        sub: PropTypes.string,
        count: PropTypes.number,
    })).isRequired,
    checkItems: PropTypes.arrayOf(PropTypes.string)
}

export default FilterList
