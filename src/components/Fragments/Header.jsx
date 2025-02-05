import NotificationsIcon from '@mui/icons-material/Notifications';
import Input from "../Elements/LabeledInput/Input";
import { useContext } from 'react';
import { ThemeContext } from "../../context/themeContext"; // Ensure ThemeContext is imported properly
import { AuthContext } from "../../context/authContext"; // Import AuthContext

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { name } = useContext(AuthContext); // Access user name from context

    const date = new Date().toDateString().slice(4);

    return (
        <header className={`border-b-2 p-6 flex items-center justify-between ${theme.bgcolor}`}>
            <div className="flex">
                <div className="font-bold text-lg">{name}</div>
                <div className="ms-6 text-gray-03">{date}</div>
            </div>
            <div className="flex">
                <div className="self-center">
                    <NotificationsIcon className=" scale-110 text-primary" />
                </div>
                <div className="ms-10 hidden sm:block">
                    <Input variant="bg-white w-80" />
                </div>
            </div>
        </header>
    );
}

export default Header;
