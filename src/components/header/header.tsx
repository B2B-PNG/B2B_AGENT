import { LogIn, UserPlus } from "lucide-react";
import BoatIcon from "@/assets/icons/header/boat-icon";
import FlightIcon from "@/assets/icons/header/flight-icon";
import GuidefeeIcon from "@/assets/icons/header/guidefee-icon";
import HotelIcon from "@/assets/icons/header/hotel-icon";
import RestaurantIcon from "@/assets/icons/header/restaurant-icon";
import TourIcon from "@/assets/icons/header/tour-icon";
import TransportIcon from "@/assets/icons/header/transport-icon";
import VoucherIcon from "@/assets/icons/header/voucher-icon";
import { paths } from "@/routes/paths";
import logo from "../../../public/favicon.png";
import Lang from "../lang/lang";
import Currency from "../currency/currency";
import { useRouter } from "@/routes/hooks/use-router";
import { CONFIG } from "@/config-global";
import AuthUserInfo from "@/sections/auth/components/auth-user-info";
import { useUser } from "@/hooks/actions/useAuth";

const Header = () => {
  const router = useRouter();
  const { user, userLoading } = useUser();

  const dataMenu = [
    { id: "mn_1", title: "Tour", link: paths.root, icon: <TourIcon width="18px" height="18px" /> },
    { id: "mn_2", title: "Khách sạn", link: paths.hotel.list, icon: <HotelIcon width="18px" height="18px" /> },
    { id: "mn_3", title: "Tàu", link: paths.boat.list, icon: <BoatIcon width="18px" height="18px" /> },
    { id: "mn_6", title: "Nhà hàng", link: paths.restaurant.list, icon: <RestaurantIcon width="18px" height="18px" /> },
    { id: "mn_8", title: "Chuyến bay", link: paths.flight.list, icon: <FlightIcon width="18px" height="18px" /> },
    { id: "mn_4", title: "Phương tiện", link: paths.vehicle.list, icon: <TransportIcon width="18px" height="18px" /> },
    { id: "mn_5", title: "Khuyến mãi", link: paths.root, icon: <VoucherIcon width="18px" height="18px" /> },
    { id: "mn_7", title: "Phí hướng dẫn", link: paths.guide.list, icon: <GuidefeeIcon width="18px" height="18px" /> },
  ];

  const renderAuthGroup = () => {
    if (userLoading) {
      return (
        <div className="flex w-20.25 h-10 animate-pulse bg-slate-100 rounded-lg border border-slate-200" />
      );
    }

    if (user) {
      return <AuthUserInfo />;
    }

    return (
      <div className="flex w-auto h-10 relative justify-center items-center rounded-lg border border-[rgba(64,64,64,0.5)]">
        <button
          onClick={() => (window.location.href = `${CONFIG.serverUrl}auth/login`)}
          className="w-10 flex justify-center cursor-pointer hover:bg-slate-50 transition-colors"
        >
          <LogIn color="#000000" size={18} />
        </button>

        <div className="h-10 w-px bg-[rgba(64,64,64,0.5)]" />

        <button onClick={() => { }} className="w-10 flex justify-center hover:bg-slate-50 transition-colors">
          <UserPlus color="#000000" size={18} />
        </button>
      </div>
    );
  };

  return (
    <div className="bg-white px-6 fixed top-0 left-0 w-full z-51 shadow h-30 flex flex-col justify-center gap-5">


      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button onClick={() => router.push(paths.root)} className="overflow-hidden w-10 cursor-pointer">
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </button>
          <div className="h-10 w-px bg-[rgba(64,64,64,0.5)]" />
          <button className="cursor-pointer rounded-lg px-3 py-2 text-[14px] font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 active:scale-95">
            Thiết lập kênh bán
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Lang />
            <Currency />
            <button className="cursor-pointer rounded-lg border border-[rgba(64,64,64,0.5)] px-3 py-2 text-[14px] font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 active:scale-95">
              Thêm tour customize
            </button>

            <button className="cursor-pointer rounded-lg border border-[rgba(64,64,64,0.5)] px-3 py-2 text-[14px] font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 active:scale-95">
              Danh sách Agent Host
            </button>
          </div>



          <div className="ml-2">
            {renderAuthGroup()}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {dataMenu.map((item) => (
          <div
            className="flex items-center gap-2 p-1 cursor-pointer hover:text-blue-600 transition-all"
            key={item.id}
            onClick={() => router.push(item.link)}
          >
            <div className="">{item.icon}</div>
            <div className="font-semibold text-[14px]">{item.title}</div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Header;

