// import { IAssetInfo, IChainInfo } from "@/hooks/interfaces/wallet";
// import {
//   CalcLiqParams,
//   CalcPNLAndROIParams,
// } from "@/sections/trader/signal/components/table-signal-futures";
// import { fNumber } from "./format-number";

// export const checkJwtExpiration = (token: string, minutes: number) => {
//   try {
//     // Tách payload của JWT
//     const payloadBase64 = token.split(".")[1];
//     const payload = JSON.parse(atob(payloadBase64));

//     if (!payload.exp) {
//       console.warn("Token không có exp");
//       return;
//     }

//     // exp trong JWT là Unix timestamp (giây)
//     const exp = payload.exp * 1000; // chuyển sang ms
//     const now = Date.now();

//     const diffMinutes = (exp - now) / 1000 / 60;

//     if (diffMinutes <= minutes) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (err) {
//     console.error("Không thể decode token:", err);
//   }
// };

// export const getCountdown = (timestamp: number) => {
//   const now = Date.now();
//   let diff = Math.floor((timestamp - now) / 1000); // số giây còn lại

//   if (diff <= 0) return "00:00:00";

//   const hours = Math.floor(diff / 3600);
//   diff %= 3600;
//   const minutes = Math.floor(diff / 60);
//   const seconds = diff % 60;

//   // Định dạng thành chuỗi HH:MM:SS
//   return [
//     hours.toString().padStart(2, "0"),
//     minutes.toString().padStart(2, "0"),
//     seconds.toString().padStart(2, "0"),
//   ].join(":");
// };

// export function findChainBySymbolAndId(
//   assets: IAssetInfo[] | null,
//   symbol: string,
//   chainId: string
// ): IChainInfo | undefined {
//   return assets
//     ?.find((asset) => asset.symbol === symbol)
//     ?.chains.find((chain) => chain.chainId === chainId);
// }

// export const formatEmail = (email: string) => {
//   if (!email) return "";

//   const [name, domain] = email.split("@");

//   if (name.length <= 6) return email;

//   const start = name.slice(0, 6);
//   const end = name.slice(-2);

//   return `${start}…${end}@${domain}`;
// };
// export const calcPNLAndROI = ({
//   entryPrice,
//   currentPrice,
//   quantity,
//   leverage,
//   side,
// }: CalcPNLAndROIParams) => {
//   entryPrice = Number(entryPrice);
//   currentPrice = Number(currentPrice);
//   quantity = Number(quantity);
//   leverage = Number(leverage);

//   let pnl;

//   if (side === "LONG" || side === "BUY") {
//     pnl = (currentPrice - entryPrice) * quantity;
//   } else {
//     pnl = (entryPrice - currentPrice) * quantity;
//   }

//   const margin = (entryPrice * quantity) / leverage;

//   const roi = (pnl / margin) * 100;

//   return { pnl, roi };
// };

// export const calcLiquidationPrice = ({
//   entryPrice,
//   leverage,
//   side,
// }: CalcLiqParams) => {
//   if (side === "LONG" || side === "BUY") {
//     return fNumber((entryPrice * leverage) / (leverage + 1));
//   }

//   if (side === "SHORT" || side === "SELL") {
//     return fNumber((entryPrice * leverage) / (leverage - 1));
//   }
// };
