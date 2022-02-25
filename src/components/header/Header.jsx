
import "./header.css";
import "./ResponsiveHeader.css";


export const Header = () => {
  return (
    <header>
      <div className="wraper">
        <div className="logo">
          <h1>Healthy Food</h1>
        </div>
        <nav>
          <ul>
            <li><a href='/'>HEALTHY RECIPES</a></li>
            <li><a href='/'>BLOG</a></li>
            <li><a href='/'>JOIN</a></li>
          </ul>          
          <div className="btn">
            <button type='text'>REGISTER</button>
          </div>
        </nav>
      </div>
    </header>
  );
};
