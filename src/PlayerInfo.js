import React from 'react'
import { Table } from 'reactstrap';


    const adjustWidth = {
        width: "90%",
        margin: "0px 0px 0px 150px "
    }


const PlayerInfo = (props) => (
    <div>
    <Table responsive style={adjustWidth}>
        <thead>
          <tr>
            <th>Steam ID</th>
            <th>Avatar</th>
            <th>Professional Name</th>
            <th>Steam username</th>
            <th>Team name</th>
            <th>Team tag</th>
            <th>Country</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.account_id}</th>
            <td><img src ={props.avatar}/></td>
            <td>{props.name}</td>
            <td>{props.personaname}</td>
            <td>{props.team_name}o</td>
            <td>{props.team_tag}</td>
            <td>{props.loccountrycode}</td>

          </tr>
        </tbody>
      </Table>
    
</div>






)






export default PlayerInfo;