
import React from 'react';

interface TypeDescription {
    description: string;
}

export const TextoCentral = ({ description }: TypeDescription) => {
    return (
        <div className="flex items-center justify-center">
            <div className="mt-8 w-3/4">
                <p className="text-justify text-gray-600">{description}</p>
            </div>
        </div>
    )
}