"use client";

import { useState } from "react";

export default function GiftCard() {
  const [value, setValue] = useState({
    input: "",
    textarea: "",
  });
  function handleChange(e, identifier) {
    setValue(prevState => ({
      ...prevState,
      [identifier]: e.target.value,
    }));
  }

  return (
    <>
      <input
        onChange={e => handleChange(e, "input")}
        className="giftcard ml-auto"
        type="text"
        placeholder="متن کارت یاد بود (هدیه)"
        value={value.input}
      />
      <textarea
        onChange={e => handleChange(e, "textarea")}
        className="giftcard h-20"
        value={value.textarea}
        placeholder="توضیحات سفارش"></textarea>
    </>
  );
}
