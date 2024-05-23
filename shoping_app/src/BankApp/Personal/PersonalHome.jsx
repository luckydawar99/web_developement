
import { Outlet, Link } from "react-router-dom";

export default function PersonalHome() {
  return (
    <div>
      <h2>Personal Home</h2>
      <ul>
        <li><Link to="plogin">Login</Link></li> {/* Use Link component instead of lowercase 'link' */}
        <li><Link to="pregister">Register</Link></li> {/* Use Link component instead of lowercase 'link' */}
      </ul>
      <hr />
      <Outlet />
      <div>
      <Link to="/personal" >Back to main</Link>
      </div>
    </div>
  );
}
