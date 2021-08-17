import React from 'react'
import GenerateCSV from './GenerateCSV'
import { CSVLink } from 'react-csv'

const MainCSV = React.memo(({allUsersDataConnected, title, roomName, id}) => {
    const headers = [
        { label: "Primer Nombre", key: "firstName"},
        { label: "Segundo Nombre", key: "lastName"},
        { label: "Correo", key: "email"},
    ]

    const newAllData = allUsersDataConnected.map((user, index) => {
        const {name, ...others} = allUsersDataConnected[index];
        const data = {firstName: name.firstName, lastName: name.lastName, email: others.email}
        return data

    })

    return (
        <>
            {title}
            <CSVLink data={newAllData} headers={headers} target="_blank">Descargar </CSVLink>
        </>
    )
})

export default MainCSV
