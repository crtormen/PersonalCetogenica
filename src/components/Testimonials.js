import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const TestimonialsWrapper = styled.div`
    display: grid;
    ${({ columns }) => columns ? 
        `grid-column: 1/-1` :
        `grid-column: 2/-2`
    }; 
    ${({ columns }) => columns ? 
        `grid-template-columns: repeat(${columns}, 1fr)` : 
        `grid-template-columns: repeat(3,1fr);`};
    gap: 3rem;
    ${({ columns }) => columns ?
        `margin: 3rem` :
        `margin: 3rem auto`
    };
    
    /* min-height: 250px; */
    /* height: 250px; */
    background-color: white;
    box-shadow: 5px 10px 1rem rgba(1,1,1, 0.5);

    .hide {
        display: none;
    }


    ${media.lessThan("medium")`
        grid-template-columns: 1fr;

        .hide {
            display: block;
        }
    `}

`

const Testimonials = ({columns, children}) => (
    <TestimonialsWrapper columns={columns}>
        {children}
    </TestimonialsWrapper>
)

export default Testimonials;