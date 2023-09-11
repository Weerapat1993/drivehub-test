import { Row, Col, Spin } from 'antd'
import { useCarLists } from '../hooks'
import type { ICar } from '../types/car';
import ProductCard from './ProductCard';
import { ContainerContent } from './styles/styled';
import { FC } from 'react';
import { Filter } from '../hooks/useCarList';
import Notification from '../../../components/Layout/Notification';

interface Props {
  filter: Filter
}

const CartList: FC<Props> = (props) => {
  const { filter } = props
  const { loading, list } = useCarLists({ filter });
  return (
    <Spin spinning={loading} tip="Loading" size="large">
      <ContainerContent>
        <Notification />
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {list.map((car: ICar) => (
            <Col key={car.id} className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={6}>
              <ProductCard data={car} />
            </Col>
          ))}
        </Row>
      </ContainerContent>
    </Spin>
  );
}

export default CartList