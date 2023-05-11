import React, { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import AppTable from "@/components/common/AppTable";
import MessageCard from "@/components/base/Card/MessageCard";
import { Grid } from "@mui/material";
import api from "@/config/api";
export default function index() {
  const labels = ["شماره", "نام محصول", "کد محصول", "تاریخ فروش", "کد مالیاتی"];

  const rows = [
    {
      number: 1,
      product_name: "برنج",
      product_code: "1123",
      sell_date: "5/1/1402",
      code_: "5636723",
    },
    {
      number: 2,
      product_name: "نخود فرنگی",
      product_code: "1123",
      sell_date: "5/1/1402",
      code_: "5636723",
    },
    {
      number: 3,
      product_name: "کنسرو لوبیا",
      product_code: "1123",
      sell_date: "5/1/1402",
      code_: "5636723",
    },
    {
      number: 4,
      product_name: "رب گوجه فرنگی",
      product_code: "1123",
      sell_date: "5/1/1402",
      code_: "5636723",
    },
    {
      number: 5,
      product_name: "خامه بسته بندی",
      product_code: "1123",
      sell_date: "5/1/1402",
      code_: "5636723",
    },
  ];
  useEffect(() => {
    api.getData().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <MainLayout title={"حساب مالیاتی"} activeIndex={0}>
      <Grid mb={6}>
        <MessageCard
          title="اطلاعات حساب مالیاتی که میتوانید با کد مالیاتی اقدام به پرداخت کنید"
          subtitle="شما با اطلاعات که در اختیار دارید میتوانید نسبت به نام محصول خود روش پرداخ خود را انتخاب کنید از این سامانه مارا برای کار خود انتخاب کردید خوشحال هستیم"
          backgroundColor="#e9c46a"
          backgroundColor2="#f2cc8f"
        />
      </Grid>
      <AppTable labels={labels} rows={rows} />
    </MainLayout>
  );
}
