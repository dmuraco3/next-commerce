import Navbar from "../../../components/admin/navbar";
import { AuthedPage } from "../../../types/authed-page";

const AdminProducts : AuthedPage = () => {
    return (
        <div className="min-h-screen flex">
            <Navbar  activeTab="/products"/>
        </div>
    )
}

export default AdminProducts;