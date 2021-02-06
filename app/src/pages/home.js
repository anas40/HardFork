import { useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import "../static/css/login.scss";
import { productIdHome as pih } from "../store/atoms";

function Home() {
  const history = useHistory();
  const productId = useRecoilValue(pih);

  return (
    <div className="container my-4 px-0">
      <section>
        <div className="containerS">
          <div className="frame">
            <div className="nav">
              <ul className="links">
                <li className="signin-active">
                  <a className="btn">Enter Product Id</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
