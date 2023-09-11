import { Button, Table, Modal, Input, Space } from "antd"
import { ChangeEvent, Fragment, useState } from "react"
import type { ColumnsType } from 'antd/es/table';
import { NavbarRight } from "./styles/styled"
import { ShoppingOutlined } from "@ant-design/icons"
import { useDiscountList } from '../hooks/useDiscountList'
import { useSelector } from "react-redux";
import { selectCartCount } from "../../../store/cart/cartSlice";

interface DataType {
  key: string;
  title: string;
  price: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <b>{text}</b>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => <div>{text} THB</div>,
  },
];

const CartModal = () => {
  const [isCartModal, setCartModal] = useState(false)
  const [code, setCode] = useState('')
  const count = useSelector(selectCartCount)
  const { list } = useDiscountList()
  const data = [
    {
      key: '1',
      title: 'Total',
      price: 1200,
    },
    {
      key: '2',
      title: 'Discount',
      price: 0,
    },
    {
      key: '3',
      title: 'Grand Total',
      price: 1200,
    },
  ];
  const handleCode = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCode(value)
  }
  const isCodeCorrect = list.filter(item => item.code === code).length > 0
  return (
    <Fragment>
      <NavbarRight>
        <Button 
          type="text"
          size="large"
          icon={<ShoppingOutlined />} 
          onClick={() => setCartModal(true)}
        >
          Cart ({count})
        </Button>
      </NavbarRight>
      <Modal
        title="Cart"
        centered
        open={isCartModal}
        onOk={() => setCartModal(false)}
        onCancel={() => setCartModal(false)}
        footer={() => null}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input size="large" placeholder="Discount code" onChange={handleCode} status={code && !isCodeCorrect ? 'error' : ''} />
        </Space>
        <Table showHeader={false} pagination={false} columns={columns} dataSource={data} />
      </Modal>
    </Fragment>
  )
}

export default CartModal