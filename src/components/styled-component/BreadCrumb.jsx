import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BreadCrumbWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    color: #89959B;
    a{
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-size:  11px; 
        color: #89959B;
        margin: 5px;

        &:hover{
            text-decoration: underline;
        }
    }
    .material-icons{
        font-size:  15px; 
    }
`

function BreadCrumb({ path }) {
    return (
        <BreadCrumbWrapper>
            {path.map((pos, index) => (
                <>
                    <a href={pos.href} >
                        {pos.title}
                    </a>
                    {index + 1 !== path.length
                        ? <i class="material-icons">keyboard_arrow_right</i>
                        : ''}
                </>
            ))}
        </BreadCrumbWrapper>
    )
}

BreadCrumb.propTypes = {
    path: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default BreadCrumb
