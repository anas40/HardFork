import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { popups } from "../store/atoms";
import provider from "../store/web3Provider";
import Loader from "../components/loader";

export default function Products() {
  const setPopup = useSetRecoilState(popups);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await provider.callTransaction("getAllProducts");
      console.log(response);
      if (response.code) {
        console.log(response.message);
        setFailMessage(response.message);
      } else {
        setProducts(response);
      }
    } catch (e) {
      console.error(e);
      setPopup(e.message);
    } finally {
      setLoading(false);
    }

    // setProducts([[4356, "this is medicine", "Aspirin"], [5556, "this is branded shoe", "Adidas Neo"]])
  }, []);

  return (
    <div className="productList">
      <div className="container">
        <h1>Products you own</h1>
        <div className="list-group">{loading ? <Loader /> : null}</div>
      </div>
    </div>
  );
}
