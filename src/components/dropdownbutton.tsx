import { ChevronDown } from "lucide-react";
import { useState, ComponentProps, ReactNode } from "react";

interface DropdownButtonProps extends ComponentProps<'button'>{
    items: string[];
    children: ReactNode;
}

export function DropdownButton({children, items, ...props}: DropdownButtonProps){
    const [isDropdownOpen, setDropdownOpen] = useState({
        education: false,
        type: false,
        theme: false
    })

    const toggleDropdown = (dropdown: keyof typeof isDropdownOpen) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };
    
    return (
        <div className="bg-slate-200 rounded-xl h-11 px-4 flex justify-evenly items-center w-1/4 relative">
                <button {...props} onClick={() => toggleDropdown('education')} className="text-slate-600 text-sm font-semibold flex justify-between flex-1">
                    {children}
                    <ChevronDown></ChevronDown>
                </button>
                {isDropdownOpen.education && (
                    <div className="bg-slate-200 shadow-md rounded mt-2 p-2 flex flex-col absolute top-full w-11/12">
                        {items.map((item, index) => (
                            <div key={index} className="gap-1">
                            <label className="text-sm text-slate-600 gap-1">
                                <input type="checkbox" />
                                <span>{item}</span>
                            </label>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}
