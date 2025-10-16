/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { redirect } from "next/navigation";
export default function Home() {
  return (
    <div className="home-page">
      <h4 className="text-center">Chào mừng bạn đến với trang quản trị trường Phú Xuân</h4>

      <Image className="banner-img" width={1905} height={712} src="https://phuxuanschool.edu.vn/wp-content/uploads/2024/12/4-1024x382.png" alt="Tuyển sinh trường TH,THCS,THPT Phú Xuân" ></Image>
    </div>

  );
}
