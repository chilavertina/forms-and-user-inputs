import { useState } from "react";

const useMojHook = (validateVrednost) => {
  const [ubacenaVrednost, setUbacenaVrednost] = useState("");
  const [kliknuto, setKliknuto] = useState(false);

  const validnaVrednost = validateVrednost(ubacenaVrednost);
  const imaGresku = !validnaVrednost && kliknuto;

  const vrednostChangeHandler = (event) => {
    setUbacenaVrednost(event.target.value);
  };

  const vrednostBlurHandler = (event) => {
    setKliknuto(true);
  };

  const resetovanje = () => {
    setUbacenaVrednost("");
    setKliknuto(false);
  };

  return {
    value: ubacenaVrednost,
    daLiJeValidno: validnaVrednost,
    imaGresku,
    vrednostChangeHandler,
    vrednostBlurHandler,
    resetovanje,
  };
};

export default useMojHook;
