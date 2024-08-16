import React from 'react';

interface WelcomeMessageProps {
    userName: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ userName }) => {
    return (
        <div>
            <h1>Привет, {userName}!</h1>
        </div>
    );
};

export default WelcomeMessage;
