import { LandingButton } from "@/components/buttons/LandingButton";
import { LogosDesktop, LogosMobile } from "@/components/LogoWall";
import { BlurFade } from "@/components/magicui/blur-fade";
import FadeContent from "@/components/ui/fadeContent";

export default function Landing() {
  return (
    <>
      {/* Contenedor principal: en móvil se apila en columna, en escritorio en fila */}
      <div className="flex flex-col md:flex-row items-center h-screen max-w-screen-2xl mx-auto">
        
        {/* Sección para escritorio (solo se muestra en md y superiores) */}
        <div className="hidden md:flex flex-row items-center w-full">
          {/* Logos para Desktop */}
          <div className="flex items-center h-screen">
            <BlurFade delay={0.8}>
              <LogosDesktop />
            </BlurFade>
          </div>

          {/* Contenido de la sección PC */}
          <div className="w-[672px] mx-auto mb-10 items-center">
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
          </div>
        </div>

        {/* Sección para móviles (se muestra solo en md:hidden) */}
        <div className="md:hidden w-full mx-auto mb-4 items-center px-4">
          <BlurFade delay={0.1}>
            <h1 className="text-4xl font-black mt-8 text-center">
              Hola, soy Joaquin👋
            </h1>
          </BlurFade>

          {/* Contenedor para el párrafo e imagen (en columna para evitar solapamientos) */}
          <div className="flex flex-col items-center justify-center mt-4">
            <BlurFade delay={0.1}>
              <p className="text-1xl text-center">
                Desarrollador Frontend con experiencia en Backend.
              </p>
            </BlurFade>
            <FadeContent
              blur={true}
              duration={250}
              delay={250}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="mt-4">
                <img
                  src="Perfil.jpg"
                  alt="foto perfil"
                  className="rounded-3xl max-w-[80px]"
                />
              </div>
            </FadeContent>
          </div>

          <BlurFade delay={0.3}>
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

          {/* Logos para Mobile */}
          <div className="mt-4">
            <LogosMobile />
          </div>
        </div>
      </div>
    </>
  );
}
