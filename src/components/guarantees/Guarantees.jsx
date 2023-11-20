import "./guarantees.css";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdGppGood } from "react-icons/md";

const Guarantees = () => {
  return (
    <section id="guaranteesId">
      <h2>الضمانات و الإسترجاع</h2>
      <div className="container guarantees-container">
        <div className="card">
          <div className="icon">
            <RiCustomerService2Line />
          </div>
          <h4>خدمة ما بعد البيع</h4>
          <h5>خدمة عملاء متاحة طوال الوقت في جميع أيام الأسبوع</h5>
        </div>
        <div className="card">
          <div className="icon">
            <FaShippingFast />
          </div>
          <h4>شحن مجاني</h4>
          <h5>
            توصيل مجاني الى باب البيت مع تعقيم المنتج و احترام السلامة الصحية
          </h5>
        </div>
        <div className="card">
          <div className="icon">
            <GiReceiveMoney />
          </div>
          <h4>الدفع عند الإستلام</h4>
          <h5>لن تقموا بدفع أي شئ حتى تتوصلوا بالمنتج</h5>
        </div>
        <div className="card">
          <div className="icon">
            <MdGppGood />
          </div>
          <h4>ضمان المنتج</h4>
          <h5>ضمان لمدة 14 يوم اذا لم يعجبكم المنتج يمكنكم استعادة نقودكم</h5>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
