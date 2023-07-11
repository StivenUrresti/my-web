import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Billing = () => (
  <div id="product" className=' mb-24'>
    <h3 className="font-poppins font-semibold ss:text-[45px] text-[38px] text-white ss:leading-[100.8px] leading-[75px] ">
    These are some of my technical skills
        </h3>
<div>
<section>
    <div className={` grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
</div>
  

  </div>
);

export default Billing;