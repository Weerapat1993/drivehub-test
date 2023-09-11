
import { Typography, Row, Col, Input, Space, Select } from 'antd'
import { Background, ContainerFilter, FlexEnd } from './styles/styled'
import { ChangeEvent } from 'react'

const { Title } = Typography

interface Props {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void
  onSort: (value: string) => void
}

const ProductFilter: React.FC<Props> = (props) => {
  const { onSearch, onSort } = props
  return (
    <Background color="white">
      <ContainerFilter>
        <Row style={{ height: 80 }}>
          <Col sm={24} md={12}>
            <Title level={2}>
              Car Available
            </Title>
          </Col>
          <Col sm={24} md={12}>
            <FlexEnd>
              <Space direction="horizontal">
                <Input placeholder="Search Car" size='large' onChange={onSearch} />
                <Select
                  style={{ width: 200 }}
                  size='large'
                  onChange={onSort}
                  options={[
                    { value: '', label: '--- Sort ---' },
                    { value: 'asc', label: 'Price: Low - High' },
                    { value: 'desc', label: 'Price: High - Low' },
                  ]}
                  defaultValue={''}
                />
              </Space>
            </FlexEnd>
          </Col>
        </Row>
      </ContainerFilter>
    </Background>
  )
}

export default ProductFilter