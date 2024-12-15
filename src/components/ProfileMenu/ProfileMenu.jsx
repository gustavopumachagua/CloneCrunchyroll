import ProfileHeader from "./ProfileHeader";
import ProfileButton from "./ProfileButton";
import ProfileNav from "./ProfileNav";

const ProfileMenu = () => {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 max-w-sm mx-auto md:mx-0 rounded-lg shadow-lg">
      <ProfileHeader />
      <ProfileButton />
      <ProfileNav />
    </div>
  );
};

export default ProfileMenu;
