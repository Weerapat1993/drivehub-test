import { CartList, ProductFilter } from "../modules/product/components";
import { Layout } from "../components";
import { ChangeEvent, useState } from "react";

function HomePage() {
  const [keyword, setKeyword] = useState('')
  const [sort, setSort] = useState('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setKeyword(value)
  }
  const handleSort = (value: string) => {
    setSort(value)
  }
  const filter = {
    keyword,
    sort,
  }
  return (
    <Layout>
      <ProductFilter onSearch={handleSearch} onSort={handleSort} />
      <CartList filter={filter} />
    </Layout>
  );
}

export default HomePage;
