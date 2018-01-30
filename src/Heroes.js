import React from 'react'

const Heroes = (props) => (
    <div>

        <h1>{props.localized_name}</h1>
        <img src={"https://api.opendota.com" + props.img} />
        <img src={"https://api.opendota.com" + props.icon} />
        <h1>{props.pro_win}</h1>
        <h1>{props.pro_pick}</h1>
        <h1>{props.pro_ban}</h1>
    </div>

)

export default Heroes;