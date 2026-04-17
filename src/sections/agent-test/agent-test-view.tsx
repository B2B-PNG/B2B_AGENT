import { CONFIG } from "@/config-global";
import { useUser } from "@/hooks/actions/useAuth";
import { useRouter } from "@/routes/hooks/use-router";
import { paths } from "@/routes/paths";

const AgentTestView = () => {
    const router = useRouter()
    const { user, userLoading } = useUser()
    const data = [
        { id: 11, name: 'CÔNG TY KẾT NỐI DU LỊCH', strCompanyNameUrl: "cong-ty-tnhh-ket-noi-du-lich-8F620" },
    ];

    const handleRouter = () => {
        window.location.href = `${CONFIG.serverUrl}auth/login`
    }
    return (
        <div className="p-4 bg-white min-h-screen">
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#D9EFFF]">
                            <th className="px-4 py-3 text-[#1E56A0] font-semibold text-sm w-16">STT</th>
                            <th className="px-4 py-3 text-[#1E56A0] font-semibold text-sm">Tên công ty</th>
                            <th className="px-4 py-3 text-[#1E56A0] font-semibold text-sm text-right">Thao tác</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-4 text-gray-700 text-sm">{item.id}</td>
                                <td className="px-4 py-4 text-gray-800 font-medium text-sm">
                                    {item.name}
                                </td>
                                <td className="px-4 py-4 text-right">

                                    {user ? (
                                        <div className="flex justify-end gap-2">
                                            <button className="cursor-pointer bg-[#00468C] hover:bg-[#003366] text-white px-4 py-1.5 rounded text-sm font-medium transition-all">
                                                Tariff
                                            </button>
                                            <button
                                                onClick={() => router.push(paths.tour.list)}
                                                className="cursor-pointer bg-[#00468C] hover:bg-[#003366] text-white px-4 py-1.5 rounded text-sm font-medium transition-all"
                                            >
                                                Shop
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={handleRouter}
                                            className="cursor-pointer bg-[#00468C] hover:bg-[#003366] text-white px-4 py-1.5 rounded text-sm font-medium transition-all"
                                        >
                                            Đăng nhập
                                        </button>
                                    )}

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AgentTestView;