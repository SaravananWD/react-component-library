"use client";

import styled from "styled-components";
import space from "@/utils/space";
import Select from "@/components/ui-library/Select";

export default function SelectHome() {
  return (
    <>
      <h1>Select</h1>
      <Select>
        <option value="air-conditioner">Air conditioner</option>
        <option value="refrigerator">Refrigerator</option>
        <option value="washing-machine">Washing machine</option>
        <option value="microwave-oven">Microwave Oven</option>
        <option value="geyser">Geyser</option>
        <option value="water-purifier">Water purifier</option>
      </Select>
    </>
  );
}
