import styled from 'styled-components'

const LayoutStyled = styled.div`
    && {
        .Logo {
            background: var(--color1, red);
            position: relative;
            font-size: 40px;
            font-weight: bold;
            text-transform: uppercase;
            transform: skew(-15deg);
            width: fit-content;
            margin: 2rem auto;
            padding: 0.5rem;
        }

        .InnerWrapper {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
        }
    }
`

export default LayoutStyled
