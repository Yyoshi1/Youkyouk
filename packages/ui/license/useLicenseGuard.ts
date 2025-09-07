import { useEffect } from "react";
import { useRouter } from "next/router";

export const useLicenseGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const license = localStorage.getItem("youkyouk_license");
    if (!license) {
      router.push("/license");
    }
  }, [router]);
};
