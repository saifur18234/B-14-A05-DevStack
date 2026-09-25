import type { Technology } from "../types";

interface SidebarProps {
    stack: Technology[];
    handleRemoveFromStack: (id: string) => void;
    handleRemoveAll: () => void;
}

const Sidebar = ({
    stack,
    handleRemoveFromStack,
    handleRemoveAll
}: SidebarProps) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5">
            <h2 className="text-xl font-bold">Your Stack</h2>

            {stack.length > 0 && (
                <p className="text-sm text-gray-500 mt-1">
                    {stack.length} Technology Selected
                </p>
            )}

            {stack.length === 0 ? (
                <p className="text-gray-500 mt-3">Your stack is empty.</p>
            ) : (
                <>
                    <div>
                        {stack.map((tech) => (
                            <div
                                key={tech.id}
                                className="flex items-center justify-between border border-gray-200 rounded-lg  p-3"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-8 h-8 object-contain"
                                    />

                                    <div>
                                        <h3 className="font-semibold">{tech.name}</h3>
                                        <p className="text-sm text-gray-500">{tech.category}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleRemoveFromStack(tech.id)}
                                    className="text-red-500"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleRemoveAll}
                        className="mt-4 w-full bg-red-500 text-white py-2 
                    rounded-lg"
                    >
                        Remove All
                    </button>
                </>
            )}

        </div>
    );

};

export default Sidebar;