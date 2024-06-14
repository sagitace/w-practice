import { useEffect, ReactNode } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSave: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onSave, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 max-sm:p-3">
      <div className="bg-[#54585e] rounded-lg shadow-lg max-w-md w-full relative h-3/4">
        <div className="lg:p-3 max-sm:p-2 sm:p-2 md:p-2">
          <div className="bg-[#eeeeee] h-32 rounded-md">
            <div className=" bg-[#eeeeee] p-4 rounded-md">
              <form method="GET">
                <div className="relative text-gray-600 focus-within:text-gray-400 border-b-2 border-[#2a2c31]">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <div className=" focus:outline-none focus:shadow-outline text-black">
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios/30/search--v1.png"
                        alt="search--v1"
                        className="p-1"
                      />
                    </div>
                  </span>
                  <span>
                    <h1 className="text-[#2a2c31] text-sm ml-12 font-bold">
                      Search sub category
                    </h1>
                  </span>
                  <input
                    type="search"
                    name="searchSubCategory"
                    className="pb-2 text-sm max-sm:text-xs text-white bg-[#eeeeee] rounded-md pl-10   border-[#eeeeee] focus:text-gray-900 w-full ring-0 ring-none focus:border-none focus:ring-0 ml-2"
                    placeholder="Choose the right category for your product"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>

          {children}
        </div>
        <div className="p-4 max-sm:p-2 sm:p-2 md:p-2 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
          >
            Close
          </button>
          <button
            onClick={onSave}
            type="button"
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
