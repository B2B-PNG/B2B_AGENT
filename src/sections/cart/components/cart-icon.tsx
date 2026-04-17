import { ShoppingCart } from "lucide-react";
import { useRouter } from "@/routes/hooks/use-router";
import { paths } from "@/routes/paths";

const CartIcon = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(paths.cart.list)}
            className="relative cursor-pointer group"
        >
            <button className="cursor-pointer p-2.5 text-gray-600 group-hover:bg-gray-100 group-hover:text-[#4a6fa5] rounded-full transition-all duration-300">
                <ShoppingCart size={20} strokeWidth={2} />
            </button>
            {/* You can add a badge here when cart state is implemented */}
        </div>
    );
};

export default CartIcon;
