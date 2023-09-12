import { Button, Table, Modal, Input, Space, Row, Col, Typography } from "antd"
import { ChangeEvent, Fragment, useState } from "react"
import type { ColumnsType } from 'antd/es/table';
import { CartEmpty, NavbarRight, TextLarge } from "./styles/styled"
import { MinusOutlined, PlusOutlined, ShoppingOutlined } from "@ant-design/icons"
import { useDiscountList } from '../hooks/useDiscountList'
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectCartCount, selectCartItems } from "../../../store/cart/cartSlice";
import { ICar } from "../../product/types/car";

const { Paragraph, Title } = Typography

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
  const dispatch = useDispatch()
  const count = useSelector(selectCartCount)
  const cartItems = useSelector(selectCartItems)
  const { list } = useDiscountList()
  const total = cartItems.reduce((pre: number, cur) => pre + (cur.price * (cur.qty || 0)), 0)
  const discount = list.filter(item => item.code === code)?.[0]?.amount || 0
  const grandTotal = total - discount
  const data = [
    {
      key: '1',
      title: 'Total',
      price: total,
    },
    {
      key: '2',
      title: 'Discount',
      price: discount,
    },
    {
      key: '3',
      title: 'Grand Total',
      price: grandTotal,
    },
  ];
  const handleCode = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCode(value)
  }
  const handleChangeQty = (data: ICar,operation: string) => {
    switch(operation) {
      case '+':
        dispatch(addItem(data))
        break
      case '-':
        dispatch(removeItem(data))
        break
    }
  }
  const discountAmount = list.filter(item => item.code === code)?.[0]?.amount || 0
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
        {count === 0 ? (
          <CartEmpty>
            <Title level={3}>No item in cart.</Title>
          </CartEmpty>
        ) : (
          <Fragment>
            {cartItems.map(item => (
              <Row key={item.id}>
                <Col span={12}>
                  <Paragraph style={{ margin: 1 }} strong>{item.title}</Paragraph>
                  <Paragraph>{item.price} THB/Day</Paragraph>
                </Col>
                <Col span={12}>
                  <Button type="primary" icon={<MinusOutlined />} onClick={() => handleChangeQty(item, '-')} />
                  <TextLarge>{item?.qty || 0}</TextLarge>
                  <Button type="primary" icon={<PlusOutlined />} onClick={() => handleChangeQty(item, '+')} />
                </Col>
              </Row>
            ))}
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input size="large" placeholder="Discount code" onChange={handleCode} status={code && !isCodeCorrect ? 'error' : ''} />
            </Space>
            <Table showHeader={false} pagination={false} columns={columns} dataSource={data} />
          </Fragment>
        )}
      </Modal>
    </Fragment>
  )
}

export default CartModal