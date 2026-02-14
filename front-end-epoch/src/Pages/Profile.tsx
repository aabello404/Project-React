import { useEffect, useState } from "react";
import ProfileDashBoard from "../Components/Users/ProfileDashBoard";
import { useNavigate } from "react-router-dom";
interface Profile {
  id: number;
  createdOn: Date;
  name: string;
  email: string;
  hash: string;
  lastUpdate: Date;
  profilePhotoUrl: string | null;
}
export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | undefined>();
  useEffect(() => {
    const controller = new AbortController();
    const accessToken = sessionStorage.getItem("UserEpoch");
    if (!accessToken) navigate("/auth");
    const Fetch = async () => {
      try {
        const response = await fetch("http://localhost:9000/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          signal: controller.signal,
        });
        const data = await response.json();
        if (response.ok) setProfile(data);
        else if (response.status === 401) navigate("/auth");
      } catch (err) {
        console.error("Error fetching Profile", err);
      }
    };
    Fetch();
    return () => controller.abort();
  }, []);
  if (!profile) return <h1>LOADING</h1>;
  return (
    <>
      <ProfileDashBoard Data={profile} />
    </>
  );
}
