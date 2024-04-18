import React from 'react';
import { TitleBox, LineGreen, BoxTitle, TitleContainer, TitlePrincipal } from './TitleStyles';

interface TitleProps {
    title: string;
}

const TitleComponent = ({ title }: TitleProps) => {
    return (
        <BoxTitle>
            <TitleContainer>
                <TitleBox>{title}</TitleBox>
                <LineGreen />

                <TitlePrincipal>
                <h1>Bombeamento Solar</h1>
                </TitlePrincipal>
            </TitleContainer>
        </BoxTitle>
    );
};

export default TitleComponent;
