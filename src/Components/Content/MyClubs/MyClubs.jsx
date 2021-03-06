import React from 'react';
import s from './myClubsWrapper.module.css'
import Club from "../AllClubs/Club/Club";

const MyClubs = (props) => {
    let MyClubsList = props.MyMemberClubsData.map(c => <Club nameOfClub={c.name}
                                                             brief={c.brief}
                                                             logo={c.logo_b64}
    />)
    return (
        <div className={s.myClubsWrapper}>
            {MyClubsList}
        </div>
    );
};

export default MyClubs;