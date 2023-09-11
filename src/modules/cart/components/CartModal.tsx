import { Button, Modal } from "antd"
import { Fragment, useState } from "react"
import { NavbarRight } from "./styles/styled"
import { ShoppingOutlined } from "@ant-design/icons"

const CartModal = () => {
  const [isCartModal, setCartModal] = useState(false)
  return (
    <Fragment>
      <NavbarRight>
        <Button 
          type="text"
          size="large"
          icon={<ShoppingOutlined />} 
          onClick={() => setCartModal(true)}
        >
          Cart (0)
        </Button>
        {/* <Button type="primary" onClick={() => setCartModal(true)}>
          Cart(0)
        </Button> */}
      </NavbarRight>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={isCartModal}
        onOk={() => setCartModal(false)}
        onCancel={() => setCartModal(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </Fragment>
  )
}

export default CartModal