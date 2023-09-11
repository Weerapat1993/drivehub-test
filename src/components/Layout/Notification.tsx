import { Alert } from "antd"
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeNotification, selectNotification } from "../../store/notification/notificationSlice"

const Notification = () => {
  const { visible, message, status } = useSelector(selectNotification)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeNotification())
  }
  return (
    <Fragment>
      {visible ? (
        <Alert message={message} type={status} showIcon closable afterClose={handleClose} />
      ) : null}
    </Fragment>
  )
}

export default Notification