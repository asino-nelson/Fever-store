import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full max-w-[450px]"
          src={assets.about_img}
          alt="about-image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            temporibus, nostrum fuga dolor laudantium nisi, explicabo in soluta
            quo voluptatum aliquam dolorem velit perspiciatis vero eos suscipit
            consectetur pariatur molestiae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dignissimos similique dolore nemo dolores perferendis saepe cum
            voluptatum, magnam dicta, excepturi est? Temporibus a voluptatibus
            culpa! Quam rerum delectus laborum!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            veritatis exercitationem doloribus. Eos enim optio facere ex animi
            eum totam exercitationem voluptatibus. Quod a porro architecto quae
            labore nihil asperiores.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            atque suscipit obcaecati porro 
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            atque suscipit obcaecati porro aspernatur velit. Saepe accusamus,
            maxime 
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            atque suscipit ?
          </p>
        </div>
      </div>

      <NewsLetter/>

    </div>
  );
};

export default About;
