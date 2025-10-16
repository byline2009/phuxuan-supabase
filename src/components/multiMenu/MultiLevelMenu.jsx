"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function MultiLevelMenu({ menuData }) {
  const [openIndex, setOpenIndex] = useState(null);
  const menuRef = useRef();
  const router = useRouter();
  const pathname = usePathname();
  const [localMenuData, setLocalMenuData] = useState(menuData);

  useEffect(() => {
    // Code ở đây sẽ chỉ chạy MỘT LẦN khi component được mount
    const userString = localStorage.getItem("user");
    let user = null;
    try {
      user =
        userString && JSON.parse(userString) ? JSON.parse(userString) : null;
    } catch (error) {
      console.log("Lỗi khi parse userString:", error);
    }
    console.log(
      "check",
      user && user.username && dsEmailLd.includes(user.username)
    );

    if (user && user.username && dsEmailLd.includes(user.username)) {
      setLocalMenuData([
        ...localMenuData,
       
        {
          label: "Dashboard Kpi",
          link: "https://tracuu7.mobifone.vn:8103",
        },
        {
          label: "Câu hỏi thường gặp",
          link: "/cau-hoi-thuong-gap",
        },
        // {
        //   label: "Tuyển dụng",
        //   link: "/tuyen-dung",
        // },
        {
          label: "Chat với AI",
          link: "/chat",
        },
        {
          label: "Khai Báo Điểm Bán Lẻ",
          link: "/form-retail",
        },
        {
          label: "Link PowerBI C2C",
          link: "https://app.powerbi.com/view?r=eyJrIjoiMGIxNjc4OWItZjI5ZS00MDJlLWJiOWQtODA3MTEyYTI1Mjc3IiwidCI6ImYzYWNiMTYyLWEyNjctNDVhMi1iOTVlLThiOTdmYWU5MTI1ZiIsImMiOjEwfQ%3D%3D",
        },
      ]);
    }

    // Nếu cần, return một hàm để cleanup khi component unmount
    return () => {
      console.log("Component sẽ bị unmount");
    };
  }, []); // <-- mảng rỗng nghĩa là không có dependencies => chỉ chạy 1 lần

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ul className="multi-level-menu" ref={menuRef}>
      {localMenuData.map((item, index) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = openIndex === index;

        return (
          <li
            className="menu-item"
            key={index}
            onClick={() => {
              if (hasChildren) {
                setOpenIndex(isOpen ? null : index);
              } else {
                setOpenIndex(null);
                if (
                  item.link == "https://tracuu7.mobifone.vn:8103" ||
                  item.link ==
                    "https://app.powerbi.com/view?r=eyJrIjoiMGIxNjc4OWItZjI5ZS00MDJlLWJiOWQtODA3MTEyYTI1Mjc3IiwidCI6ImYzYWNiMTYyLWEyNjctNDVhMi1iOTVlLThiOTdmYWU5MTI1ZiIsImMiOjEwfQ%3D%3D"
                ) {
                  window.open(item.link, "_blank");
                } else {
                  router.push(item.link);
                }
              }
            }}
          >
            <span
              className={
                pathname == item.link ||
                (pathname == "/kiem-tra-loai-thue-bao" &&
                  item.link == "/thue-bao") ||
                (pathname == "/kiem-tra-thue-bao" && item.link == "/thue-bao")
                  ? "menu-title active"
                  : "menu-title"
              }
            >
              {item.label}
              {hasChildren && (
                <span className="arrow">{isOpen ? "▲" : "▼"}</span>
              )}
            </span>

            {hasChildren && isOpen && (
              <ul className="sub-menu">
                {item.children.map((child, cIdx) => (
                  <li key={cIdx}>
                    <a
                      href={child.link}
                      className={
                        pathname == child.link
                          ? "menu-link active"
                          : "menu-link"
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation(); // ✅ Ngăn lan lên .menu-item
                        setOpenIndex(null);
                        router.push(child.link);
                      }}
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
