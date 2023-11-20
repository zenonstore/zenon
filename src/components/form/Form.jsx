import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import offer from "../../assets/offer.png";

const Form = () => {
  const [price, setPrice] = useState(199);
  const [ordered, setOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const serviceId = "service_3fjghje";
  const publicKey = "7YPKoBaCZNEWHnu6Q";
  const tampId = "template_clj7mwp";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm(serviceId, tampId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setOrdered(true);
      },
      (error) => {
        console.log(error.text);
        setOrdered(false);
        setIsLoading(false);
        alert("حدث خطأ ما، لم يتم الطلب بنجاح، حاول مرة اخري");
      }
    );
  };

  function handelPrice(val) {
    val === "1 item price: 199" && setPrice(199);
    val === "2 items price: 358" && setPrice(179);
    val === "3 items price: 507" && setPrice(169);
  }

  return (
    <section id="order-form" className="container">
      <h2>عرض الأصدقاء</h2>
      <h5>
        اشتري أكثر ووفري أكثر{" "}
        <span className="offer-span">+ شحن مجاني لمدة 48 ساعة فقط</span>
      </h5>
      <img className="offre-img" src={offer} alt="offer_image" />
      <h2>نموذج الطلب</h2>
      <form className="buy-form" ref={form} onSubmit={sendEmail}>
        <div className="offer-holder">
          <label>اختر العرض المناسب</label>
          <select name="offer" onChange={(e) => handelPrice(e.target.value)}>
            <option value="1 item price: 199">قطعة واحدة</option>
            <option value="2 items price: 358">
              (عرض الأصدقاء) قطعتين + خصم 10%
            </option>
            <option value="3 items price: 507">
              (عرض الأصدقاء) ثلاث قطع + خصم 15%
            </option>
          </select>
          <p className="price">
            سعر القطعة: <span>{price} ريال</span> بدلا من
            <span className="old-price"> 270</span>
          </p>
          <p className="price">
            السعر الكلي:{" "}
            <span>
              {price === 199
                ? "199 ريال"
                : price === 179 && `${price * 2} ريال`}
              {price === 169 && `${price * 3} ريال`}
            </span>{" "}
            <span className="free-shipping">+ شحن مجاني</span>
          </p>
        </div>
        <h3>معلومات الشحن</h3>
        <div className="half">
          <div className="holder">
            <label>الإسم الأول</label>
            <input type="text" name="user_Fname" required disabled={ordered} />
          </div>
          <div className="holder">
            <label>الإسم الأخير</label>
            <input type="text" name="user_Lname" required disabled={ordered} />
          </div>
        </div>
        <div className="block">
          <label>رقم هاتف المستَلم</label>
          <input type="text" name="user_phone" required disabled={ordered} />
        </div>
        <div className="block">
          <label>المدينة</label>
          <input type="text" name="city" required disabled={ordered} />
        </div>
        <div className="block">
          <label>العنوان بالتفصيل</label>
          <input type="text" name="address" required disabled={ordered} />
        </div>
        <div className="block">
          <label>هل لديكم أي ملاحظة أو طلب؟ -اختياري-</label>
          <textarea
            disabled={ordered}
            name="notes"
            rows={5}
            placeholder="يمكنكم اضافة رقم هاتف بديل يتم استخدامه فقط في حالة عدم الرد علي الهاتف الأساسي اثناء فترة الشحن"
          />
        </div>
        {!ordered && (
          <input
            type="submit"
            value={isLoading ? "الطلب قيد الإرسال..." : "إتمام الطلب"}
            className={ordered ? "sucess-btn" : "order-btn"}
          />
        )}
        {ordered && (
          <p className="ok-message">
            تم استلام طلبكم بنجاح <br /> سيتم التواصل معكم قريباً لتأكيد الطلب
          </p>
        )}
      </form>
    </section>
  );
};

export default Form;
