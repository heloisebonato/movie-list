import styled from "styled-components";

export const Container = styled.div`

    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 40%;
    }

    button {
        background-color: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 16px;
        transition: all 0.3s;

        &:hover{
            background-color: #5848c2;
        }
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 20px;
    }

    .release {
        opacity: 0.5;
    }

`