import { useRecoilState, useSetRecoilState } from "recoil";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../static/css/login.scss";
import provider from "../store/web3Provider";
import { login as ll, popups } from "../store/atoms";

export default function Login() {
  const history = useHistory();
  const [login, setLogin] = useRecoilState(ll);
  const setPopup = useSetRecoilState(popups);

  useEffect(() => {
    if (login) {
      setPopup("Already Logged In!");
      history.replace("/");
    } else {
      setPopup("Please Login first!");
    }
  }, []);

  return (
    <section>
      <div className="containerS">
        <div className="frame">
          <div className="lbox">
            <button className="btn btn-primary btn-lg active">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}
