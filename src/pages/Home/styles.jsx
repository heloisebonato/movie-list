import styled from 'styled-components'

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;


`
export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 200px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: 700;
        font-size: 18px;
    }

    a{
        transition: all 0.5s;
    }

    a:hover {
        transform: scale(1.1);
    }

`