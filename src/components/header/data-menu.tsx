import BoatIcon from "@/assets/icons/header/boat-icon";
import FlightIcon from "@/assets/icons/header/flight-icon";
import GuidefeeIcon from "@/assets/icons/header/guidefee-icon";
import HotelIcon from "@/assets/icons/header/hotel-icon";
import RestaurantIcon from "@/assets/icons/header/restaurant-icon";
import TourIcon from "@/assets/icons/header/tour-icon";
import TransportIcon from "@/assets/icons/header/transport-icon";
import VoucherIcon from "@/assets/icons/header/voucher-icon";
import { paths } from "@/routes/paths";

export const dataMenu = [
  {
    id: "mn_1",
    title: "Tour",
    link: paths.tour.list,
    match: [paths.tour.list, paths.tour.detail],
    icon: <TourIcon width="18px" height="18px" />,
  },
  {
    id: "mn_2",
    title: "Khách sạn",
    link: paths.hotel.list,
    match: [paths.hotel.list],
    icon: <HotelIcon width="18px" height="18px" />,
  },
  {
    id: "mn_3",
    title: "Tàu",
    link: paths.boat.list,
    match: [paths.boat.list],
    icon: <BoatIcon width="18px" height="18px" />,
  },
  {
    id: "mn_6",
    title: "Nhà hàng",
    link: paths.restaurant.list,
    match: [paths.restaurant.list, paths.restaurant.detail],
    icon: <RestaurantIcon width="18px" height="18px" />,
  },
  {
    id: "mn_8",
    title: "Chuyến bay",
    link: paths.flight.list,
    match: [paths.flight.list, paths.flight.detail],
    icon: <FlightIcon width="18px" height="18px" />,
  },
  {
    id: "mn_4",
    title: "Phương tiện",
    link: paths.vehicle.list,
    match: [paths.vehicle.list, paths.vehicle.detail],
    icon: <TransportIcon width="18px" height="18px" />,
  },
  {
    id: "mn_5",
    title: "Khuyến mãi",
    link: paths.root,
    match: [paths.root],
    icon: <VoucherIcon width="18px" height="18px" />,
  },
  {
    id: "mn_7",
    title: "Phí hướng dẫn",
    link: paths.guide.list,
    match: [paths.guide.list],
    icon: <GuidefeeIcon width="18px" height="18px" />,
  },
];