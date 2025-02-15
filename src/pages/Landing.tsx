import { LandingButton } from "@/components/buttons/LandingButton";
import { LogosDesktop, LogosMobile } from "@/components/LogoWall";
import { BlurFade } from "@/components/magicui/blur-fade";
import FadeContent from "@/components/ui/fadeContent";

export default function Landing() {
  return (
    <>
        <div className="absolute h-screen">
          <BlurFade delay={0.8}>
            <div className="hidden md:block">
              <LogosDesktop />
            </div>
          </BlurFade>
        </div>
      <div className="flex flex-row max-h-fit">
        {/* Logos Desktop (PC) */}

        {/* Versión PC (sin cambios) */}
        <div className="hidden md:block w-[672px] mx-auto mb-10 items-center">
          <div className="flex">
            <div>
              <BlurFade delay={0.1}>
                <h1 className="text-4xl font-black mt-16">Hola, soy Joaquin👋</h1>
              </BlurFade>
              <div>
                <BlurFade delay={0.1}>
                  <p className="mt-4 text-1xl w-[480px]">
                    Desarrollador Frontend con experiencia en Backend.
                  </p>
                </BlurFade>
                <BlurFade delay={0.1}>
                  <p className="mt-4 text-1xl w-[480px]">
                    Estudio Ingeniería en Sistemas en la Universidad Nacional y
                    llevo más de un año creando proyectos y capacitándome
                    constantemente. 🚀
                  </p>
                </BlurFade>
              </div>
            </div>
            <FadeContent
              blur={true}
              duration={150}
              delay={250}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="mt-20 ml-8">
                <img
                  src="Perfil.jpg"
                  alt="foto perfil"
                  className="rounded-3xl max-w-36"
                />
              </div>
            </FadeContent>
          </div>

          <FadeContent
            blur={true}
            duration={150}
            delay={250}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="border-t-2 border-slate-100 mt-10 animate-border-appear"></div>
          </FadeContent>

          <div>
            <BlurFade delay={0.3}>
              <h1 className="text-2xl my-5 font-black">Sobre mí</h1>
            </BlurFade>
            <BlurFade delay={0.4}>
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

          <div className="block md:hidden">
            <LogosMobile />
          </div>
        </div>

        {/* Versión MÓVIL (iPhone 14 o similares) */}
        <div className="md:hidden w-full mx-auto mb-4 items-center px-4">
          <BlurFade delay={0.1}>
            <h1 className="text-4xl font-black mt-8 text-center">
              Hola, soy Joaquin👋
            </h1>
          </BlurFade>

          {/* Contenedor para la fila con primer párrafo e imagen */}
          <div className="flex flex-row items-center justify-center mt-4">
            <BlurFade delay={0.1}>
              <p className="text-1xl text-center">
                Desarrollador Frontend con experiencia en Backend.
              </p>
            </BlurFade>
            <FadeContent
              blur={true}
              duration={150}
              delay={250}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="ml-4">
                <img
                  src="Perfil.jpg"
                  alt="foto perfil"
                  className="rounded-3xl max-w-[80px]"
                />
              </div>
            </FadeContent>
          </div>

          {/* Segundo párrafo debajo de la fila anterior */}
          <BlurFade delay={0.1}>
            <p className="text-1xl text-center mt-4">
              Estudio Ingeniería en Sistemas en la Universidad Nacional y
              llevo más de un año creando proyectos y capacitándome
              constantemente. 🚀
            </p>
          </BlurFade>

          <LandingButton />

          <div className="border-t-2 border-slate-100 mt-10 animate-border-appear"></div>

          <div>
            <BlurFade delay={0.3}>
              <h1 className="text-2xl my-5 font-black text-center">Sobre mí</h1>
            </BlurFade>
            <BlurFade delay={0.4}>
              <p className="text-base text-center">
                He desplegado más de 20 proyectos y siempre busco superar
                expectativas con mi trabajo. Trabajo con React.js, TypeScript,
                Node.js, MongoDB y más. Me apasiona construir aplicaciones
                escalables, optimizadas y con experiencias fluidas para los
                usuarios. Siempre estoy aprendiendo y explorando nuevas
                tecnologías para innovar.
              </p>
            </BlurFade>
          </div>

          <div className="block md:hidden">
            <LogosMobile />
          </div>
        </div>
      </div>
    </>
  );
}
