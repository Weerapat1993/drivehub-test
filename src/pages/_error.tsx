import { Layout } from "../components/Layout";
import { ContainerContent } from "../modules/product/components/styles/styled";

export default function ErrorPage() {
  return (
    <Layout>
      <ContainerContent>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
      </ContainerContent>
    </Layout>
  );
}