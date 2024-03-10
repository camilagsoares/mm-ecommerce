import React from 'react';
import { TitleBox, LineGreen, BoxTitle, TitleContainer } from './TitleStyles';

interface TitleProps {
    title: string;
}

const TitleComponent = ({ title }: TitleProps) => {
    return (
        <BoxTitle>
            <TitleContainer>
                <TitleBox>{title}</TitleBox>
                <LineGreen />
            </TitleContainer>
        </BoxTitle>
    );
};

export default TitleComponent;
