import { Alert } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { closeNotification, selectNotification } from "../../store/notification/notificationSlice"
import { MarginAuto, PaddingSmall } from "./styled"

const Notification = () => {
  const { visible, message, status } = useSelector(selectNotification)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeNotification())
  }
  return (
    <MarginAuto>
      {visible ? (
        <PaddingSmall>
          <Alert message={message} type={status} showIcon closable afterClose={handleClose} />
        </PaddingSmall>
      ) : null}
    </MarginAuto>
  )
}

export default Notification