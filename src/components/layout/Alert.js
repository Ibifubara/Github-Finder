import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'


// there was an alert prop before const Alert = ({alert})
const Alert = () => {
  const alertContext = useContext(AlertContext)

  const { alert } = alertContext

  return (
    alert!== null && (
        <div className={`alert alert-${alert.type}`}>
            <i class='bx bx-info-circle'></i> {alert.msg}
        </div>
    )
  )
}

export default Alert
