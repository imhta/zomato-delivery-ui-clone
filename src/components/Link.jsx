import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LinkWithIcon = styled.a`
    align-items: center;
    color: #33373D;
    display: flex;
    font-family: OpenSans Regular, sans-serif;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    padding: 5px 10px;

    &:hover{
        background-color: #FFF8EB;
        transition: .15s ease-out  background-color;
    }

    img{
        height: ${(props) => props.iconSize &&  props.iconSize ? props.iconSize : '28px'};
        width: ${(props) => props.iconSize &&  props.iconSize ? props.iconSize : '28px'};
    }
    span{
        padding: 0px 0px 0px 4px;
    }
`;

function Link({ href, icon, title }) {
    return (
        <LinkWithIcon href={href} target="_" iconSize={icon && icon.size}>
            {icon ? <img src={icon.url} alt={title} /> : ''}
            <span>{title}</span>
        </LinkWithIcon>
    )
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.shape({
        url: PropTypes.string.isRequired,
        size: PropTypes.string
    }),
    title: PropTypes.string.isRequired,
}
export default Link
