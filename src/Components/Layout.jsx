import React from 'react'; 
import styled from 'styled-components';

const Background = styled.div`
    background-image: url('${props => props.imgUrl}');
    height: 450vh;
    width: 100%;
    background-attachment:fixed;
    background-position: center center;
    
    
    opacity: 85%;
`;

function Layout({ children, backgroundImg }) {
    return (
        <Background imgUrl={backgroundImg} >
            {children}
        </Background>
    )
}

export default Layout