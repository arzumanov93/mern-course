import React from 'react';

export const LinkCard = ({link}) => {
    return(
        <>
            <h2>Ссылка</h2>

            <p>Ваша ссылка: <a href={link.to} target="_blank">{link.to}</a></p>
            <p>Откуда: <a href={link.from} target="_blank">{link.from}</a></p>
            <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
            <p>Дата создвния: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}