import { lazy, Suspense } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import InitLayout, { LAYOUT } from "../layouts/init-layout";
import { SplashScreen } from "@/components/loading";
import { AuthRoute } from "./auth-route";
const TourPage = lazy(() => import("@/pages/tour/list"));
const TourDetailPage = lazy(() => import("@/pages/tour/detail"));
const BoatPage = lazy(() => import("@/pages/boat/list"));
const FlightPage = lazy(() => import("@/pages/flight/list"));
const FlightDetailPage = lazy(() => import("@/pages/flight/detail"));
const VehiclePage = lazy(() => import("@/pages/vehicle/list"));
const VehicleDetailPage = lazy(() => import("@/pages/vehicle/detail"));
const GuidePage = lazy(() => import("@/pages/guide-fee/list"));
const GuideDetailPage = lazy(() => import("@/pages/guide-fee/detail"));
const RestaurantPage = lazy(() => import("@/pages/restaurant/list"));
const RestaurantDetailPage = lazy(() => import("@/pages/restaurant/detail"));
const SignInPage = lazy(() => import("@/pages/auth/sign-in"));
const HotelPage = lazy(() => import("@/pages/hotel/list"));
const HotelDetailPage = lazy(() => import("@/pages/hotel/detail"));
const Page404Page = lazy(() => import("@/pages/error/page404"));
const AgentTestPage = lazy(() => import("@/pages/agent-test/list"));


// import InitLayout, { LAYOUT } from "@/layouts/init-layout";
// import RootRedirect from "./root-redirect";

export function Router() {
  // const isLoading = true;
  // if (isLoading) return <SplashScreen />


  const router = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [

        {
          element: (
            // <ProtectedRoute>
            <AuthRoute>

              <InitLayout type={LAYOUT.MAIN}>
                <Outlet />
              </InitLayout>
            </AuthRoute>
            //  </ProtectedRoute>
          ),
          children: [
            {
              path: paths.tour.list,
              element: <TourPage />,
            },
            {
              path: paths.tour.detail,
              element: <TourDetailPage />,
            },
            {
              path: paths.boat.list,
              element: <BoatPage />,
            },
            {
              path: paths.hotel.list,
              element: <HotelPage />,
            },
            {
              path: paths.hotel.detail,
              element: <HotelDetailPage />,
            },
            {
              path: paths.flight.list,
              element: <FlightPage />,
            },
            {
              path: paths.flight.detail,
              element: <FlightDetailPage />,
            },
            {
              path: paths.vehicle.list,
              element: <VehiclePage />,
            },
            {
              path: paths.vehicle.detail,
              element: <VehicleDetailPage />,
            },
            {
              path: paths.guide.list,
              element: <GuidePage />,
            },
            {
              path: paths.guide.detail,
              element: <GuideDetailPage />,
            },
            {
              path: paths.restaurant.list,
              element: <RestaurantPage />,
            },
            {
              path: paths.restaurant.detail,
              element: <RestaurantDetailPage />,
            },
          ],
        },

        // INFO LAYOUT
        {
          element: (
            <AuthRoute>
              <InitLayout type={LAYOUT.INFO}>
                <Outlet />
              </InitLayout>
            </AuthRoute>
          ),
          children: [
            {
              // path: paths.agentTest.list,
              index: true,
              element: <AgentTestPage />,
            },
          ],
        },

        // AUTH LAYOUT
        {
          element: (
            <InitLayout type={LAYOUT.AUTH}>
              <Outlet />
            </InitLayout>
          ),
          children: [
            {
              path: paths.auth.signIn,
              element: <SignInPage />,
            },
          ],
        },

      ],
    },

    // OUTSIDE LAYOUT
    { path: paths.page404, element: <Page404Page /> },
    { path: "*", element: <Navigate to={paths.page404} replace /> },
  ]);
  return router;
}
