import { Card, Button, Divider } from 'antd'
import ProductImage from './ProductImage'
import { MarginAuto } from './styles/styled'

const { Meta } = Card

interface Props {
  title: string
  image: string
  price: number
}

const ProductCard: React.FC<Props> = (props) => {
  const { image, title, price } = props
  const desc = `${price} THB/Day`
  return (
    <MarginAuto>
      <Card
        hoverable
        style={{ width: 305 }}
        cover={<ProductImage alt={title} src={image} />}
      >
        <Meta title={title} description={desc} />
        <Divider />
        <Button type="primary" size="large" block>
          Add To Cart
        </Button> 
      </Card>
    </MarginAuto>
  )
}

export default ProductCard