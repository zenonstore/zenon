import React, { useState } from "react";
import "./info.css";
import numsImage from "../../assets/nums.png";
import product from "../../assets/product.png";
import tech from "../../assets/technology.png";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";
import gif4 from "../../assets/gif4.gif";

const taps = [
  {
    id: 1,
    head: "مولد الحرارة والهواء.",
    image: tech,
    description:
      "تستخدم هذه المجموعة تقنية تدفق الهواء الساخن بسرعة كبيرة، حيث يتراوح معدل تدفق الهواء بين 25000 لفة في الدقيقة الي 60000 لفة في الدقيقة، مما يجعلها أكثر فاعلية في تجفيف وتصفيف الشعر بدون تلف أو تقصف بفعل الحرارة. وبالمقارنة مع المكواة العادية، فشعرك لا يلامس سطح المكواة مباشرة، مما يحافظ علي سلامة وحيوية الشعر ويمنع تقصفه.",
  },
  {
    id: 2,
    head: "ملحق الكيرلر يمين ويسار.",
    image: gif2,
    description:
      "احصلي علي خصلات مموجة بكل سهولة، حيث ستقوم رأس الكيرلر بلف الشعر بشكل تلقائي مع عدم ملامسة الشعر سطح المكواة مباشرةً كما في المكواة العادية.",
  },
  {
    id: 3,
    head: "ملحق تصفيف الشعر.",
    image: gif3,
    description:
      "احصلي علي شعر أكثر نعومة وحيوية وخالي من التشابك بفضل تدفق الهواء الساخن بين خصلات شعرك.",
  },
  {
    id: 4,
    head: "ملحق فرد الشعر.",
    image: gif4,
    description:
      "احصلي علي شعر ناعم بكل سهولة دون الحاجة الي استخدام جهاز السشوار وفرشاة الفرد، الآن الإثنين مدمجين معاً في رأس واحدة.",
  },
  {
    id: 5,
    head: "ملحق تجفيف الشعر.",
    image: gif1,
    description:
      "تقوم هذه الرأس بتجفيف الشعر بكل سهولة! فقط قومي بتركيب الرأس الخاصة بتجفيف الشعر واحصلي علي شعر جاف خلال دقائق، وننصح بعدم استخدام حرارة مرتفعة حفاظاً علي سلامة شعرك.",
  },
];

const Info = () => {
  const [showMore, setShowMore] = useState(2);
  return (
    <section id="infoId">
      <h2>وصف المنتج</h2>
      <img src={product} alt="product_image" className="product-img" />
      <p className="m-des">
        اكتشفي أسرار الحصول علي شعر جميل بكل سهولة مع مجموعة تصفيف الشعر بالهواء
        الساخن المقدمة من متجر زينون. <br />
        هذه المجموعة المبتكرة مصممة لتلبية جميع احتياجات شعرك، وبفضل تقنية
        الأيونات المتقدمة والطلاء السيراميكي تقوم المجموعة بحبس الرطوبة وتقلل
        التجعيد وتضمن توزيعاً متساوياً للحراة مع 3 مستويات للسرعة والحرارة. مما
        يوفر لكي نتائج ممتازة وإحترافية كما في صالونات التجميل. بالإضافة الي أن
        المجموعة خفيفة الوزن وسهلة التنقل بها سواء داخل المنزل أو خارجه.
      </p>
      <h2>محتويات العلبة</h2>
      <h5>
        تأتي المجموعة مع عدد 5 ملحقات حتي تتمكني من الحصول علي جميع القصات
        والستايلات.
      </h5>
      <img className="product-info" src={numsImage} alt="product_info" />
      <div className="nums-description">
        <h3 className="nums-heading">ملحقات المجموعة</h3>
        <div className="nums">
          {taps.map((tap) => (
            <Taps
              key={tap.id}
              tap={tap}
              showMore={showMore}
              setShowMore={setShowMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;

function Taps({ tap, showMore, setShowMore }) {
  function handleShowMore(id) {
    setShowMore(id);
  }
  return (
    <div className={showMore === tap.id ? "head-active" : "head"}>
      <div className="item" onClick={(e) => handleShowMore(tap.id)}>
        <span
          className={showMore === tap.id ? "num-circle-active" : "num-circle"}>
          {tap.id}
        </span>
        {tap.head}
      </div>
      {showMore === tap.id && (
        <>
          <img
            className="des-tap-img"
            src={tap.image}
            alt="product_description_image"
          />
          <div className="tap-description">{tap.description}</div>
        </>
      )}
    </div>
  );
}
