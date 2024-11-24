import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ()=>{
    return(
        <>
            <div className="dashboard-menu">
                <Link to="dashboard/laptops">Laptops</Link>
                <Link to="dashboard/mobiles">Mobiles</Link>
                <Link to="dashboard/headphones">Headphones</Link>
            </div>
            
            <br></br><br></br>

            <Outlet></Outlet>
            
        </>
    )
}
export default Dashboard;