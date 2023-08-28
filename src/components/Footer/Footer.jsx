import React from 'react'
import './_footer.scss';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__trust box">
                <a href="https://www.bbc.com/ukrainian/institutional-50170368">
                    <span>Чому BBC заслуговує на довіру</span>
                </a>
            </div>
            <ul className="footer__links box">
                <li className="footer__links__item">
                    <a href="https://www.bbc.com/ukrainian/institutional-38144387">
                        <span>Правила користування</span>
                    </a>
                </li>
                <li className="footer__links__item">
                    <a href="https://www.bbc.com/ukrainian/institutional-38144827">
                        <span>Особисті данні</span>
                    </a>
                </li>
                <li className="footer__links__item">
                    <a href="https://www.bbc.com/usingthebbc/cookies/">
                        <span>Coockies</span>
                    </a>
                </li>
                <li className="footer__links__item">
                    <a href="https://www.bbc.com/ukrainian/send/u50853885">
                        <span>Напишіть нам</span>
                    </a>
                </li>
            </ul>
            <div className="footer__privacy">
                <span>© 2023 BBC. BBC не несе відповідальності за контент інших сайтів.
                    <a href="https://www.bbc.co.uk/editorialguidelines/guidance/feeds-and-links">
                        Ознайомтеся з нашими правилами зовнішніх посилань.</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer