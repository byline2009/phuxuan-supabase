"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { menuCategory } from "../../config/constants";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import MultiLevelMenu from "../../components/multiMenu/MultiLevelMenu";
import { logout } from "./action";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "@components/button/SubmitButton";

const HeaderApp = ({ toggleMenu, isOpen }) => {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(isOpen);
  // const [isExpandMenu, setIsExpandMenu] = useState(false)
  const [isSticky, setisSticky] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsOpenMenu(isOpen);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  });
  const handleMenu = () => {
    setIsOpenMenu((prev) => !prev);
    toggleMenu();
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      router.push(`/tim-kiem?q=${searchVal}`);
      setIsSearch(false);
      setSearchVal("");
    }
  };

  /* Method that will fix header after a specific scrollable */
  const handleSticky = () => {
    // const header = document.querySelector('.header') as any
    // scrollTop >= 250
    //   ? header.classList.add('is-sticky')
    //   : header.classList.remove('is-sticky')
    const scrollTop = window.scrollY;
    scrollTop > 1 ? setisSticky(true) : setisSticky(false);
  };

  return (
    <div className={`header ${isSticky && "is-sticky"}`}>
      <div className="header-top">
        <div className="logo-group">
          <button
            className={`btn-toggleMenu hide-desktop ${isOpenMenu && "isOpen"}`}
            onClick={() => handleMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="block-center">
            <div className="logo">
              <Link href="/" as="/" passHref>
                <img
                  src={`https://phuxuanschool.edu.vn/wp-content/uploads/2024/12/Logo-WEBSITE-PNG-xoa-nen-1024x287.png`}
                  alt="logo"
                />
              </Link>
            </div>
            {/* <div className="main-title">7</div> */}
          </div>
        </div>
        <div className="hotline">
          {/* <a
            href="https://https://phuxuanschool.edu.vn/"
            target="_blank"
            rel="noreferrer"
            className="back-mbf"
          >
            Truy cập https://phuxuanschool.edu.vn/
          </a> */}
          <form>
            <SubmitButton
              className={`btn-mbf btn-solid`}
              label="Logout"
              action={logout}
            />
          </form>
        </div>
      </div>
      <div className="header-bottom">
        <MultiLevelMenu menuData={menuCategory} />

        {/* <div className="navigation">
          {menuCategory.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${item.link === pathname && "active"}`}
            >
              <Link href={item.link} as={item.link}>
                <span>{item.label} </span>
              </Link>
            </div>
          ))}
        </div> */}
        <div className={`search-blog ${isSearch && "openSearch"}`}>
          {!isSearch ? (
            <i className="icon-search" onClick={() => setIsSearch(!isSearch)} />
          ) : (
            // <i
            //   className="icon-search"
            //   onClick={() =>
            //     alert('Tính năng đang được xây dựng, mong bạn thông cảm')
            //   }
            // />
            <div className="search-group">
              <input
                type="text"
                placeholder="Nhập từ khoá tìm kiếm..."
                onChange={(e) => setSearchVal(e.target.value)}
                onKeyDown={(e) => handleSearch(e)}
              />
              <i
                className="icon-close"
                onClick={() => setIsSearch(!isSearch)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
