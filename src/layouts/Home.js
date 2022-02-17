import Heading from "../components/custom/Heading";
import Navbar from "../components/custom/Navbar";

export default function Home(props) {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="">
                <div className="top-0 absolute w-full">
                    <Navbar />
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-2/3 my-5">
                        <div className="grid grid-cols-3 gap-5 p-5 items-center">
                            <div className="col-span-2">

                                <div className="mb-5">
                                    <Heading size="lg" title={props.title}/>
                                </div>
                                {props.children}

                            </div>
                            <div className="col-span-1">
                                <img src="./bg.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
