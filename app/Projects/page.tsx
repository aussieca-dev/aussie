"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="relative flex justify-center items-center flex-col h-auto w-full mt-40 px-4">
      <div className="w-full max-w-[1300px] flex flex-col gap-2 lg:gap-6 pb-20 lg:pb-0">
        <div className="flex flex-wrap gap-2 lg:gap-6 justify-between w-full">
          {/* Left large card */}
          <Link href="/Projects/Website" className="w-full lg:w-[40%] h-[38vh] lg:h-[80vh]">
            <div className="h-full bg-green border border-cream rounded-2xl overflow-hidden">
              <div className=" relative flex justify-between items-center flex-col h-full w-full m-4">
                <div className="relative flex flex-col justify-start items-start h-auto w-full">
                  <h1 className="text-lg lg:text-3xl PoppinBold text-brown w-full text-left uppercase">
                    Webapps
                  </h1>
                  <p className="text-sm lg:text-lg Geist text-brown w-full max-w-lg text-left">
                    Explores Best webapps created by me!
                  </p>
                </div>
                <div className="group relative flex justify-center items-center h-full w-full mt-12">
                  <Image className="absolute z-50 flex justify-center items-center scale-75 lg:scale-100 transition-all duration-300" src="/cetegoris/dhrosubi.png" alt="Prot" height={300} width={300} />
                  <Image className="absolute flex justify-center items-center translate-x-[10rem] scale-75 lg:scale-100  translate-y-[3rem] lg:translate-y-[8rem] transition-all duration-300" src="/cetegoris/arctic.png" alt="Prot" height={300} width={300} />
                  <Image className="absolute flex justify-center items-center translate-x-[-10rem] scale-60 lg:scale-100 translate-y-[1rem] lg:translate-y-[8rem]  transition-all duration-300" src="/cetegoris/periodic.png" alt="Prot" height={300} width={300} />
                  <Image className="absolute flex justify-center items-center translate-x-[0rem] scale-75 lg:scale-100 translate-y-[0rem] lg:translate-y-[0rem] group-hover:translate-x-[-10rem] group-hover:translate-y-[-8rem] transition-all duration-300" src="/cetegoris/roman.png" alt="Prot" height={300} width={300} />
                  <Image className="absolute flex justify-center items-center translate-x-[0rem] scale-75 lg:scale-100 translate-y-[0rem] lg:translate-y-[0rem] group-hover:translate-x-[8rem] group-hover:translate-y-[-8rem] transition-all duration-300" src="/cetegoris/jayesh.png" alt="Prot" height={300} width={300} />
                </div>
              </div>
            </div>
          </Link>

          {/* Right stacked cards */}
          <div className="w-full lg:w-[58%] flex flex-col gap-2 lg:gap-6">
            <Link href="/Projects/Graphic-Design" className="group h-[38vh] bg-blue border border-cream transition-all duration-300 rounded-2xl overflow-hidden block">
              <div className="relative flex flex-col justify-start items-start h-auto w-full p-4">
                <h1 className="text-lg PoppinBold text-cream w-full text-left uppercase">
                  Graphic design
                </h1>
                <p className="text-sm lg:text-lg Geist text-cream w-full max-w-lg text-left">
                  Explores Best webapps created by me!
                </p>
              </div>

              <div className="group relative flex justify-center items-center h-[240px] mt-4 ml-6 w-auto">
                <Image className="absolute border-[3px] border-cream top-[60px] scale-75 lg:scale-100 group-hover:top-[0px] w-[180px] h-[180px] object-cover rounded-xl shadow-2xl rotate-[-15deg] z-30 translate-x-[-200px] group-hover:translate-x-[-400px] transition-all duration-300 group-hover:rotate-0 group-hover:scale-105" src="/cetegoris/graphic_design/metapc.png" alt="img1" width={180} height={180} />
                <Image className="absolute border-[3px] border-cream top-[20px] scale-75 lg:scale-100 group-hover:top-[0px] w-[180px] h-[180px] object-cover rounded-xl shadow-2xl rotate-[-7deg] z-40 translate-x-[-100px] group-hover:translate-x-[-200px] transition-all duration-300 group-hover:rotate-0 group-hover:scale-105" src="/cetegoris/graphic_design/metaforest.png" alt="img2" width={180} height={180} />
                <Image className="absolute border-[3px] border-cream top-0 w-[180px] scale-75 lg:scale-100 h-[180px] z-50 object-cover rounded-xl shadow-2xl rotate-[0deg] transition-all duration-300 group-hover:scale-105" src="/cetegoris/graphic_design/IBT_ArtWork.png" alt="img3" width={180} height={180} />
                <Image className="absolute border-[3px] border-cream top-[20px] scale-75 lg:scale-100 group-hover:top-[0px] w-[180px] h-[180px] object-cover rounded-xl shadow-2xl rotate-[7deg] z-40 transition-all translate-x-[100px] group-hover:translate-x-[200px] duration-300 group-hover:rotate-0 group-hover:scale-105" src="/cetegoris/graphic_design/COD_Poster.png" alt="img4" width={180} height={180} />
                <Image className="absolute border-[3px] border-cream top-[60px] scale-75 lg:scale-100 group-hover:top-[0px] w-[180px] h-[180px] object-cover rounded-xl shadow-2xl rotate-[15deg] z-30 translate-x-[200px] group-hover:translate-x-[400px] transition-all duration-300 group-hover:rotate-0 group-hover:scale-105" src="/cetegoris/graphic_design/Valorant_CSGC.png" alt="img5" width={180} height={180} />
              </div>
            </Link>

            <div className="flex gap-2 lg:gap-6 h-[30vh] lg:h-[38vh]">
              <Link href="/Projects/Figma" className="group w-1/2 h-full block">
                <div className="bg-cream border rounded-2xl overflow-hidden h-full">
                  <div className="flex justify-start items-start flex-col h-auto w-full m-2 lg:m-4">
                    <h1 className="text-lg lg:text-3xl PoppinBold text-brown w-full text-left uppercase">
                      Figma Designs
                    </h1>
                    <p className="text-sm lg:text-lg Geist text-brown w-full max-w-lg text-left">
                      Explores Best webapps created by me!
                    </p>
                  </div>
                  <div className="relative flex justify-center items-center h-[240px] mt-12 ml-6 w-auto">
                    <Image className="absolute object-cover shadow-2xl group-hover:translate-y-[-30px] group-hover:scale-80 transition-all duration-300" src="/cetegoris/figma/folksvalley.png" alt="img1" width={150} height={150} />
                    <Image className="absolute object-cover shadow-2xl translate-x-[160px] group-hover:translate-x-[130px] group-hover:translate-y-[-30px] group-hover:scale-80 transition-all duration-300" src="/cetegoris/figma/folksvalley.png" alt="img2" width={150} height={150} />
                    <Image className="absolute object-cover shadow-2xl translate-x-[-160px] group-hover:translate-x-[-130px] group-hover:translate-y-[-30px] group-hover:scale-80 transition-all duration-300" src="/cetegoris/figma/folksvalley.png" alt="img3" width={150} height={150} />
                  </div>
                </div>
              </Link>

              <Link href="/Projects/Fun-Project" className="group w-1/2 h-full block">
                <div className="bg-cream border rounded-2xl overflow-hidden h-full">
                  <div className="flex justify-start items-start flex-col h-auto w-full m-2 lg:m-4">
                    <h1 className="text-lg lg:text-3xl PoppinBold text-brown w-full text-left uppercase">
                      Fun Projects
                    </h1>
                    <p className="text-sm lg:text-lg Geist text-brown w-full max-w-lg text-left">
                      Explores Best webapps created by me!
                    </p>
                  </div>
                  <div className="relative flex justify-center items-center h-[240px] mt-2 ml-6 w-auto">
                    <Image className="absolute object-cover scale-150 translate-y-[-2rem] lg:translate-y-0 lg:scale-100 group-hover:scale-90 transition-all duration-300" src="/cetegoris/fun/funbox.png" alt="img1" width={300} height={300} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

