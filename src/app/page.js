import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section>
        <SectionHeader subHeader={"Our story"} mainHeader={"About Us"} />
        <div className="max-w-2xl mx-auto text-gray-500 mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent ut dapibus dolor. Nulla feugiat, lectus ac blandit lobortis, 
            massa est volutpat tellus, at efficitur tortor nibh quis tellus. 
            In gravida sapien et dui pulvinar, at vulputate est viverra. 
            Duis non scelerisque sapien, vitae molestie dui. Proin vitae convallis est. 
            Nam in lacinia quam. Nunc sodales rhoncus lobortis. Nullam finibus feugiat ligula.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent ut dapibus dolor. Nulla feugiat, lectus ac blandit lobortis, 
            massa est volutpat tellus, at efficitur tortor nibh quis tellus. 
            In gravida sapien et dui pulvinar, at vulputate est viverra. 
            Duis non scelerisque sapien, vitae molestie dui. Proin vitae convallis est. 
            Nam in lacinia quam. Nunc sodales rhoncus lobortis. Nullam finibus feugiat ligula.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis non scelerisque sapien, vitae molestie dui. Proin vitae convallis est. 
            Nam in lacinia quam. Nunc sodales rhoncus lobortis. Nullam finibus feugiat ligula.
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeader subHeader={"Got any questions?"} mainHeader={"Contact Us"} />
        <div className="mt-8">
          <a className="text-4xl text-gray-400 hover:text-gray-600 hover:underline" href="tel:+35799123124">+357 99 123 124</a>
        </div>
      </section>
    </>
  )
}
