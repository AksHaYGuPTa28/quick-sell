import React from 'react';
import './usericon.css';

function UserIcon({ name, available }: { name: string, available: boolean }) {
    const text = React.useMemo(() => {
        return name.split(" ").map((item: string) => item[0]).join("");
    }, [name]);

    const randomColor = React.useMemo(() => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }, []);

    return (
        <div className='usericon-container'>
            <div className='usericon-text' style={{ backgroundColor: randomColor }}>
                {text}
                <div className={`user-status ${available && 'available'}`}></div>
            </div>
        </div>
    );
}

export default UserIcon;