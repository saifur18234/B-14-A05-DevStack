import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import type { Technology } from "../types";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechList from "./TechList";



const MainLayout = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch("/data.json");
                const data: Technology[] = await response.json();

                setTechnologies(data);
            } catch (error) {
                console.error("Error loading data:", error);
            } finally {
                setLoading(false);
            }

        };

        loadData();
    }, []);

    const handleAddToStack = (tech: Technology) => {
        const isAlreadyAdded = stack.some((item) => item.id === tech.id);


        if (isAlreadyAdded) {
            toast.warning(`${tech.name} is already added!`, {
                position: "bottom-right",
                autoClose: 3000,
                transition: Bounce,
            });
            return;
        }
        setStack((previousStack) => [...previousStack, tech]);

        toast.success(`${tech.name} added to stack!`, {
            position: "bottom-right",
            autoClose: 3000,
            transition: Bounce,
        });
    };

    const hanfleRemoveFromStack = (id: string) => {
        setStack((previousStack) => previousStack.filter((item) => item.id !== id));
        toast.info(`Removed from stack!`, {
            position: "bottom-right",
            autoClose: 3000,
            transition: Bounce,
        });
    };

    const handleRemovedAll = () => {
        setStack([]);
        toast.info(`All technologies removed!`, {
            position: "bottom-right",
            autoClose: 3000,
            transition: Bounce,
        });
    };

    return (
        <>
            <ToastContainer />

            <section className="container mx-auto px-4 my-16">
                {/* Section Heading */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        Exlplore the{" "}
                        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="text-slate-500 mt-3">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Technologies */}
                    <div className="col-span-12 lg:col-span-9">

                        {loading ? (
                            <p className="text-gray-500">Loading technologies...</p>
                        ) : (
                            <TechList
                                technologies={technologies}
                                stack={stack}
                                handleAddToStack={handleAddToStack}
                            />
                        )}
                    </div>

                    {/* Your Stack */}
                    <div className="col-span-12 lg:col-span-3">
                        <Sidebar
                            stack={stack}
                            handleRemoveFromStack={hanfleRemoveFromStack}
                            handleRemoveAll={handleRemovedAll}
                        />
                    </div>
                </div>

            </section >
        </>
    )
}

export default MainLayout;