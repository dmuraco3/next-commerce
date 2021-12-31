import {NextPage} from 'next'
import { FaTag } from 'react-icons/fa';
import Navbar from '../../components/admin/navbar';
import { AuthedPage } from '../../types/authed-page';

const Admin: AuthedPage = () => {
    return (
        <div className="min-h-screen flex">
            <Navbar activeTab='/'/>
        </div>
    )
}

Admin.needsAuth = true;
export default Admin;