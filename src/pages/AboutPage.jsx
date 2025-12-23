import React from "react";
import { FaCreditCard, FaPeace  } from "react-icons/fa";
import { SiEasyeda } from "react-icons/si";
import { CiBank } from "react-icons/ci";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8">
        <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-3">
          BamBank Hakkında
        </h1>
        <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm-w-[80%] w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          quasi, non reiciendis soluta pariatur magnam voluptas ad laudantium
          debitis adipisci voluptate beatae. Aut, consequuntur expedita. Itaque
          et ex expedita earum?
        </p>
        <div className="space-y-5 xl:w- [60%] lg:w-[70%] sm-w-[80%] w-full">
          <div className="flex items-start">
            <FaCreditCard className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Aidatsız Kredi Kartları
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptates reprehenderit provident dolore inventore nemo neque.
                Animi libero laboriosam aspernatur, repellendus pariatur sint,
                minus fugit, nihil explicabo dignissimos nobis dolore!
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <CiBank className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Kolay Kunnanıcı Arayüzü
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                quas nulla alias corporis vero incidunt sed exercitationem et
                quisquam! Fugit quis impedit nesciunt minima eveniet veritatis!
                Quisquam tempora cum quod.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <FaPeace className="text-purple-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Emekli Çiftçi Esnaf dostu bankacılık
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                qui sint autem rerum, eum molestiae officiis commodi voluptatem
                iusto, quas incidunt voluptas cumque est quibusdam quasi
                praesentium architecto doloremque! Consequuntur!
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <SiEasyeda  className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-slate-800">
                Hızlı ve Güvenli İşlemler
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                eos voluptates dolorem eaque cumque esse explicabo, eligendi
                iure magni nostrum ea officia architecto? Animi quis explicabo
                dolorum qui facilis sequi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
