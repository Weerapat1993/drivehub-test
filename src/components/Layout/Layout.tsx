import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import { Container, Title, FooterContainer } from './styled'

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
        }}
      >
        <Container>
          <Title>
            <Link to="/">
              DRIVEHUB
            </Link>
          </Title>
        </Container>
      </Header>
      <Content className="site-layout">
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