import './App.css';
import {useState} from "react";

function App() {
    const [isDark, setIsDark] = useState(false)

    const setDark = function(){
        setIsDark(!isDark)
    }

  return (
        <div className={isDark ? "bgr-light": "bgr-dark"}>
      <header>
        <div className="header__container">
          <div className="header__logo-div">
            <img src={require("./icons/fishing.png")} alt="hook"/>
            <span className={isDark ? "color-dark" : "color-light"}>
                Hook
              </span>
          </div>
          <div className="header_nav">
            <nav>
              <ul className="header_ul">
                  <li className="header_ul-li"><img onClick={setDark} src={isDark ? require("./icons/moon.png"): require("./icons/sun.png")} alt=""/></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">Home</a></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">Features</a></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">Pricing</a></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">Blog</a></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">
                          <span className={isDark ? "btn-light" : "btn-dark"}>
                            Register
                          </span>
                </a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section>
        <div className="sect__container">
            <div className="join-div">
                <a href="#">
                    Join meet Up
                </a>
                <span>
                    We are coming Singapore Learn more...
                </span>
            </div>
            <div className="sect-cotnent">
                <span className={isDark ? "color-dark" : "color-light"}>
                    Serve Your Website fast
                </span>

                <div className="form-div">
                    <input type="email" placeholder="Email Address"/>
                    <button>
                        Get Started
                    </button>
                </div>

                <p className={isDark ? "color-dark" : "color-light"}>
                    No credit card required
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;