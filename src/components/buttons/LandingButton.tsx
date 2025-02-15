import { ExternalLink, Link as LinkLucide } from "lucide-react";
import FadeContent from "@/components/ui/fadeContent";
import { Link } from "react-router-dom";

export const LandingButton = () => {

    
    return (
        <div className="mt-2 md:mt-6 bg-white flex items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 text-center">
                <FadeContent
                    blur={true}
                    duration={350}
                    delay={450}
                    easing="ease-out"
                    initialOpacity={0}
                >
                    <Link to="/portafolio">
                        <button className="group px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium flex items-center gap-2 w-full text-ellipsis">
                            Visitar portafolio
                            <ExternalLink className="w-0 h-0 opacity-0 group-hover:w-5 group-hover:h-5 group-hover:opacity-100 transition-all duration-200" />
                        </button>
                    </Link>
                </FadeContent>

                <FadeContent
                    blur={true}
                    duration={350}
                    delay={550}
                    easing="ease-out"
                    initialOpacity={0}
                >
                    <Link to='/contact'>
                        <button
                            className="group px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium flex items-center gap-2"
                        >
                            Contactame
                            <LinkLucide className="w-0 h-0 opacity-0 group-hover:w-5 group-hover:h-5 group-hover:opacity-100 transition-all duration-200 text-ellipsis" />
                        </button>
                    </Link>
                    
                </FadeContent>
            </div>
        </div>
    );
};
