import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import { Container, Title, FooterContainer } from './styled'
import { CartModal } from '../../modules/cart/components';

const { Header, Content, Footer } = Layout;

interface Props {
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'white',
          boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)',
        }}
      >
        <Container>
          <Row>
            <Col span={12}>
              <Title>
                <Link to="/">
                  DRIVEHUB
                </Link>
              </Title>
            </Col>
            <Col span={12}>
              <CartModal />
            </Col>
          </Row>
        </Container>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer style={{ background: '#111827', height: 100 }}>
        <FooterContainer>
          <Row>
            <Col>
              <b>DRIVEHUB Co.,Ltd</b>
              <div>
                193-195 Lake Rajada Office Complex,
              </div>
              <div>
                Ratchadapisek road, Khlong Toei, Bangkok
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
        </FooterContainer>
      </Footer>
    </Layout>
  );
};

export default AppLayout;