import {Sidebar} from "flowbite-react"
import { useEffect, useState } from "react";
import {HiArrowRight, HiUser}  from "react-icons/hi"
import { Link, useLocation } from "react-router-dom";
const DashSidebar = () => {

  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
              <Link   to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab==="profile"} icon={HiUser} label={'user'} labelColor='dark'>
                  Profile
                </Sidebar.Item>
                </Link> 
                <Sidebar.Item  icon={HiArrowRight} >
                  Sign out
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar