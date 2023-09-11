import { Card, Button, Divider } from 'antd'
import ProductImage from './ProductImage'
import { MarginAuto } from './styles/styled'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/cart/cartSlice'
import { ICar } from '../types/car'
import { EnumAlert, setNotification } from '../../../store/notification/notificationSlice'

const { Meta } = Card

interface Props {
  data: ICar
}

const ProductCard: React.FC<Props> = (props) => {
  const { data } = props
  const dispatch = useDispatch()
  const desc = `${data.price} THB/Day`
  const handleAddToCart = () => {
    dispatch(addToCart(data))
    dispatch(setNotification({ status: EnumAlert.success, message: "Add To Cart Success !" }))
  }
  return (
    <MarginAuto>
      <Card
        hoverable
        style={{ width: 305 }}
        cover={<ProductImage alt={data.title} src={data.photo} />}
      >
        <Meta title={data.title} description={desc} />
        <Divider />
        <Button type="primary" size="large" block onClick={handleAddToCart}>
          Add To Cart
        </Button> 
      </Card>
    </MarginAuto>
  )
}

export default ProductCard