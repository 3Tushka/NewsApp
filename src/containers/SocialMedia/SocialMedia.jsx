import React from 'react'
import { FacebookFilled, InstagramFilled, MailFilled, YoutubeFilled } from '@ant-design/icons';
import './_socialMedia.scss';
import SocialMediaItem from '../../components/SocialMediaItem/SocialMediaItem'

const SocialMedia = () => {
    return (
        <div className="wrapper-60">
            <div className='social-media '>
                <SocialMediaItem icon={<FacebookFilled style={{ fontSize: '100px' }} />} title="Facebook" link="https://www.facebook.com/BBCnewsUkrainian" />
                <SocialMediaItem icon={<InstagramFilled style={{ fontSize: '100px' }} />} title="Instagram" link="https://www.instagram.com/bbc_ua/" />
                <SocialMediaItem icon={<MailFilled style={{ fontSize: '100px' }} />} title="Mail" link="https://t.me/bbcukrainian" />
                <SocialMediaItem icon={<YoutubeFilled style={{ fontSize: '100px' }} />} title="YouTube" link="https://www.youtube.com/channel/UCZctsW8Tpx8Tz9Ln4KUmR3g" />
            </div>
        </div>
    )
}

export default SocialMedia