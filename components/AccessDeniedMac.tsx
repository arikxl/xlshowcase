import useWindowStore from '@/store/window';

const AccessDeniedMac = () => {

    const { closeWindow } = useWindowStore();

    return (
        <div className="flex items-center justify-center h-full w-full min-h-[400px] bg-gray-100/50">

            <div className="relative w-[340px] bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 text-center animate-in fade-in zoom-in duration-300">

                <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-linear-to-b from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center shadow-inner border border-gray-300/50">
                        <div className="w-12 h-12 bg-linear-to-br from-gray-100 to-white rounded-xl flex items-center justify-center shadow-lg">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.895 10 4 10.895 4 12V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V12C20 10.895 19.105 10 18 10H17V7C17 4.243 14.757 2 12 2ZM12 17C10.896 17 10 16.105 10 15C10 13.895 10.896 13 12 13C13.104 13 14 13.895 14 15C14 16.105 13.104 17 12 17ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <h2 className="text-gray-900 font-bold text-lg mb-2 font-sans tracking-tight">
                    Access Denied
                </h2>

                <p className="text-gray-600 text-[13px] leading-relaxed mb-6 font-sans">
                    You do not have permission to view this content. <br />
                    Please login or contact me(Arik).
                </p>

                <div className="flex justify-end gap-2 w-full">
            
                    <button
                        onClick={() => closeWindow('finder')} 
                        aria-label='ok-close'
                        className="w-full px-4 py-1.5 cursor-pointer bg-[#007AFF] hover:bg-[#0062cc] active:bg-[#0051a8] text-white text-[13px] font-medium rounded-lg shadow-sm transition-colors duration-150"
                    >
                        OK
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AccessDeniedMac;