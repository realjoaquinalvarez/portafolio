import { LandingButton } from "@/components/buttons/LandingButton";
import { BlurFade } from "@/components/magicui/blur-fade";
import FadeContent from "@/components/ui/fadeContent";

export default function Landing() {
  return (
    <>
      <div className="w-[672px] mx-auto mb-10 items-center ">
        <div className="flex">
          <div>
            <BlurFade
              delay={0.4}
            >
              <h1 className="text-4xl font-black mt-16">Hola, soy Joaquin👋</h1>
            </BlurFade>
            <div>
              <BlurFade
                delay={0.4}
              >
                <p className="mt-4 text-1xl w-[480px]">
                  Desarrollador Frontend con experiencia en Backend.
                </p>
              </BlurFade>
              <BlurFade
                delay={0.5}>
                <p className="mt-4 text-1xl w-[480px]">
                  Estudio Ingeniería en Sistemas en la Universidad Nacional y
                  llevo más de un año creando proyectos y capacitándome
                  constantemente. 🚀
                </p>
              </BlurFade>
            </div>
          </div>
          <FadeContent blur={true} duration={200} delay={500} easing="ease-out" initialOpacity={0}>
            <div className="mt-20 ml-8">
              <img
                src="Perfil.jpg"
                alt="foto perfil"
                className="rounded-3xl max-w-36"
              />
            </div>
          </FadeContent>

        </div>

        <FadeContent blur={true} duration={200} delay={500} easing="ease-out" initialOpacity={0}>
          <div className="border-t-2 border-slate-100 mt-10 animate-border-appear"></div>
        </FadeContent>


        <div>
          <BlurFade
            delay={0.6}
          >
            <h1 className="text-2xl my-5 font-black">Sobre mí</h1>
          </BlurFade>
          <BlurFade
            delay={0.7}
          >
            <p className="text-base">
              He desplegado más de 20 proyectos y siempre busco superar
              expectativas con mi trabajo. Trabajo con React.js, TypeScript,
              Node.js, MongoDB y más. Me apasiona construir aplicaciones
              escalables, optimizadas y con experiencias fluidas para los
              usuarios. Siempre estoy aprendiendo y explorando nuevas
              tecnologías para innovar.
            </p>
          </BlurFade>
        </div>

        <LandingButton />


      </div>
    </>
  );
}
