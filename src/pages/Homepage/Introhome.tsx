import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faMotorcycle, faShieldAlt  } from '@fortawesome/free-solid-svg-icons';

const Introhome = () => {
  return (
    <div>
        <div className="w-4/5 m-auto">
            <div className="mb-5">
                <h3 className="text-center text-xl font-bold md:text-5xl">Cửa hàng Xe Máy HIỆP LỢI</h3>
                <h4 className="text-center text-sm md:text-2xl md:mt-3 "> - Khẳng định Uy Tín và Chất Lượng - </h4>
            </div>
            <p className="mb-4 md:text-2xl">Chào mừng quý khách đến với Cửa hàng Xe Máy Hiệp Lợi - điểm đến tin cậy cho mọi nhu cầu về xe máy tại Bình Định!</p>
            <p className="md:text-2xl">Với hơn 20 năm hoạt động từ năm 1998, chúng tôi tự hào là địa chỉ được hàng ngàn khách hàng tin dùng. Sứ mệnh của chúng tôi không chỉ là bán xe máy mà còn là <span>mang lại sự an tâm và hài lòng tối đa cho mỗi khách hàng</span>.</p>
            <br /><p className="md:text-2xl">Chúng tôi cam kết mang đến cho khách hàng những <span>sản phẩm và dịch vụ chất lượng nhất</span>, <span>với mức giá hợp lý nhất</span>. Sự hài lòng của quý khách là niềm tự hào và động lực lớn nhất của chúng tôi.</p>
        </div>
        <section className="shipping p-50 bg-green-600 text-white p-3 mt-20">
            <div className="scontainer grid  grid-cols-1 md:flex md:flex-row md:justify-center md:justify-between md:h-52">
                <div className="box md:w-1/3 flex flex-row my-4">
                    <div className="img  text-center md:mr-10 p-30 flex items-center justify-center">
                        <FontAwesomeIcon icon={faTools} className="text-3xl mx-8 border-2 border-white rounded-full p-3 md:p-10"/> {/* Sửa chữa */}
                    </div>
                    <div className=" my-auto">
                        <h3 className="text- font-normal mb-3">ĐỘI NGŨ CHUYÊN NGHIỆP</h3>
                        <p className="opacity-80 leading-5">Đội ngũ nhân viên được tuyển chọn kỹ lưỡng và được đào tạo các kỹ năng chuyên nghiệp cao.</p>
                    </div>
                </div>
                <div className="box md:w-1/3 flex flex-row my-4">
                    <div className="img text-center md:mr-10 p-30 flex items-center justify-center">
                        <FontAwesomeIcon icon={faMotorcycle} className="text-3xl mx-8 border-2 border-white rounded-full p-3 md:p-10"/> {/* Sửa chữa */}
                    </div>
                    <div className="text my-auto">
                        <h3 className="font-normal mb-3">DỊCH VỤ NHANH CHỐNG VÀ HIỆU QUẢ</h3>
                        <p className="opacity-80 leading-5">Chúng tôi được đào tạo để làm việc một cách nhanh chóng và hiệu quả để giảm tối thiểu thời gian chờ đợi của bạn.</p>
                    </div>
                </div>
                <div className="box md:w-1/3 flex flex-row my-4">
                    <div className="img text-center md:mr-10 p-30 flex items-center justify-center">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-3xl mx-8 border-2 border-white rounded-full p-3 md:p-10"/> {/* Sửa chữa */}
                    </div>
                    <div className="text my-auto">
                        <h3 className="font-normal mb-3">HỖ TRỢ VÀ CHĂM SÓC KHÁCH HÀNG</h3>
                        <p className="opacity-80 leading-5">Đội ngũ chăm sóc khách hàng tận tình và chuyên nghiệp cao.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Introhome
