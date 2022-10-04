import React, { FC } from 'react';

interface CoolProps {
    foo?: number,
    bar?: string,
};

const TestComponent: FC = (props: CoolProps) => {
    return (
        <div>test 2</div>
    );
};

export default TestComponent;