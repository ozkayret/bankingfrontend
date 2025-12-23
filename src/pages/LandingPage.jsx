import Card from "../components/Card";
import { motion } from "motion/react";


const LandingPage = () => {
  const dashBoardNavigateHandler = () => {};

  return (
    <div className="min-h-[calc(100vh-64px)] lg-px-14 sm-px-8 px-4">
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl text-3xl md:leading-13.75 sm:leading-13.75 leading-10 lg:w-full md:w-[70%] w-full"
          >
            Bankacılıkta Yeni Dönem: Dijital Çözümlerle Tanışın
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            minima quis amet commodi. Molestiae, ducimus mollitia! A voluptas
            facere, quis optio amet hic! Modi ad fugit, illo ab ea corporis?
          </p>

          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-custom-gradient w-40 text-white rounded-md py-2"
            >
              Keşfet
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="border-btnColor border w-40 text-btnColor rounded-md py-2"
            >
             Hemen Kaydol
            </motion.button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-120 w-100 object-cover rounded-md"
            src="/images/bambank.png"
            alt=""
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Neden bizi seçmelisiniz?
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Avatajlı faiz oranları"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic vel ea ullam iure repellat voluptatum eaque, quas ipsa quis, dolore nisi? Facere ducimus veniam ex necessitatibus, reprehenderit voluptatibus distinctio perferendis?"
          />

          <Card
            title="Aidatsız kredi kartları"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi nisi numquam quos, perspiciatis reiciendis consectetur quaerat fuga ratione totam optio tempore, minus nemo sint suscipit voluptatum expedita? Sunt, magni!"
          />

          <Card
            title="24/7 Müşteri Desteği"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem laudantium numquam nam ex animi sapiente ipsam autem deleniti, eligendi enim ipsum delectus voluptates sit quos sed iste magnam soluta!"
          />
          <Card
            title="Güvenli ve Hızlı İşlemler"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptates reiciendis ea nemo neque mollitia ipsa consequatur fuga magnam, ipsum dolore aliquam consequuntur voluptatem sit excepturi qui tempora earum quas?"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
