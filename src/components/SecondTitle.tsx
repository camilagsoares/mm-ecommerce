import React from 'react';
import { TitleBox, BoxTitle, TitleContainer } from './SecondTitleStyles';

interface TitleProps {
    title: string;
}

const SecondTitle = ({ title }: TitleProps) => {
    return (
        <BoxTitle>
            <TitleContainer>
                <TitleBox>{title}</TitleBox>
            </TitleContainer>
        </BoxTitle>
    );
};

export default SecondTitle;
