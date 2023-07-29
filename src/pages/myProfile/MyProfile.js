import { Outlet } from "react-router";

const MyProfile = () => {
    return (
        <div class="container container_mini">
            {<Outlet />}
        </div>
    )
}

export default MyProfile;