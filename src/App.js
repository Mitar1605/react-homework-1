import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header__container">
          <div className="header__logo-div">
            <img src={require("./icons/fishing.png")} alt="hook"/>
            <span>
                Hook
              </span>
          </div>
          <div className="header_nav">
            <nav>
              <ul className="header_ul">
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">Home</a></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">Features</a></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">Pricing</a></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">Blog</a></li>
                <li className="header_ul-li"><a href="#" className="header__ul-li-a">
                          <span>
                            Register
                          </span>
                </a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;