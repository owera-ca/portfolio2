import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-light text-gray-800 font-sans">
            <Navbar />
            <main className="flex-grow pt-[104px]"> {/* Adjusted padding for double navbar height */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
