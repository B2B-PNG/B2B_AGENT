// import React, { JSX, useEffect } from "react";
import React, { type JSX } from "react";
import { MainLayout } from "./main-layout";
import AuthLayout from "./auth-layout";
// import { useSocketStore } from "@/zustand/useSocketStore";
// import { useUserStore } from "@/zustand/useUserStore";
// import { refreshToken } from "@/axios";
// import { useWalletStore } from "@/zustand/useWallet";
// import { useSupportAssets } from "@/hooks/actions/useWallet";
// import { useQueryClient } from "@tanstack/react-query";
// import { QUERY_KEYS } from "@/hooks/actions/query-keys";

interface Props {
  type: string;
  children: React.ReactNode;
}

export const LAYOUT = {
  AUTH: "AUTH-LAYOUT",
  MAIN: "MAIN-LAYOUT",
};

const InitLayout = ({ type, children }: Props) => {
  // const queryClient = useQueryClient();
  // const { supportAsset } = useSupportAssets();

  // const { user } = useUserStore();
  // const { setAsset } = useWalletStore();
  // const { connectSocket, socket } = useSocketStore();
  // useEffect(() => {
  //   if (type === LAYOUT.AUTH || !user?.id) return;

  //   connectSocket(user?.id ?? "");

  // return () => {
  //   disconnectSocket();
  // };
  // }, [user?.id, type, connectSocket]);

  // useEffect(() => {
  //   if (!socket) return;

  //   socket.on("user:update", () => {
  //     queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.AUTH.USER_INFO] });
  //   });

  //   return () => {
  //     socket.off("user:update");
  //   };
  // }, [socket]);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => {
  //       refreshToken();
  //     },
  //     13 * 60 * 1000
  //   );

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!supportAsset) return;
  //   setAsset(supportAsset);
  // }, [supportAsset]);

  const layoutMap: Record<string, JSX.Element> = {
    [LAYOUT.AUTH]: <AuthLayout>{children}</AuthLayout>,
    [LAYOUT.MAIN]: <MainLayout>{children}</MainLayout>,
  };
  return <div className=" h-full">{layoutMap[type]}</div>;
};

export default InitLayout;
