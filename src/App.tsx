import "./App.css";

import { Layout } from "./modules/layout";
import { ShopList } from "./modules/shop";
import { OfferList } from "./modules/offer";

function App() {
  return (
    <Layout>
      <ShopList />
      <OfferList />
    </Layout>
  );
}

export default App;
