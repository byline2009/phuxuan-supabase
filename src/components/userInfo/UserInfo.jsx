"use client";
import React from "react";
import { useRouter } from "next/navigation";

const UserInfo = () => {
  const router = useRouter();
  const { data: session, status } = {
    data: { user: { email: null } },
    status: "unauthenticated",
  };
  return (
    <div className="grid place-items-center h-screen card">
      <div className="shadow-lg p-8  flex flex-col gap-2 my-6 ">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
      </div>
      <div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
      <button
        onClick={async () => {
          try {
            await fetch(
              `${process.env.NEXTAUTH_APP_API_URL_SSL}/authentication/logout`,
              {
                method: "POST",
                credentials: "include", // gửi kèm cookie để server clear
              }
            );

            // Xóa dữ liệu phụ trong localStorage nếu có
            localStorage.removeItem("user");
            localStorage.removeItem("accessToken");

            // Redirect về trang login
            router.replace("/login");
          } catch (err) {
            console.error("Logout failed", err);
          }
        }}
        className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
      >
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
