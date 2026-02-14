import b2 from "../../assets/image/halles-bygones.jpg";
import b3 from "../../assets/image/B3.jpg";
import b5 from "../../assets/image/B5.jpg";
import HassanM from "../../assets/image/Hassan2-mosque.jpg";
import car from "../../assets/image/car-dealership.jpg";
import Mcordoba from "../../assets/image/mosque-cordoba.jpg";
import kasba from "../../assets/image/Khasbah-fes.jpg";
import lagos from "../../assets/image/Lagos-1961.jpg";
import timeSquare from "../../assets/image/time-square.jpg";
import qudsM from "../../assets/image/quds-mosque.jpg";
import Mmali from "../../assets/image/mosque-mali.jpg";
import newYork from "../../assets/image/new-york.jpg";
import stP from "../../assets/image/St-petersbourg.jpg";
import style from "./gridImages.module.css";
import { useEffect, useState } from "react";

export default function GridImages() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);
  const [box7, setBox7] = useState(false);
  const [box8, setBox8] = useState(false);
  const [box9, setBox9] = useState(false);
  const [box10, setBox10] = useState(false);
  const [box11, setBox11] = useState(false);
  const [box12, setBox12] = useState(false);
  const [box13, setBox13] = useState(false);
  const ArrayOfSetBoxses = [
    setBox1,
    setBox2,
    setBox3,
    setBox4,
    setBox5,
    setBox6,
    setBox7,
    setBox8,
    setBox9,
    setBox10,
    setBox11,
    setBox12,
    setBox13,
  ];

  useEffect(() => {
    let i = -1;

    const a = setInterval(() => {
      if (i < 13) {
        if (i >= 0) {
          let setgbox = ArrayOfSetBoxses[i];
          setgbox(true);
        }
        i++;
      } else {
        ArrayOfSetBoxses.forEach((element) => {
          element(false);
        });
        clearInterval(a);
      }
    }, 500);
    return () => clearInterval(a);
  }, [box13]);

  return (
    <>
      <div className={style.gridimages}>
        <div
          className={`${style.box} ${box1 ? style.show : ""}`}
          style={{ gridArea: "box1" }}
          aria-label="img"
        >
          <img src={b2} alt="mosque" />
        </div>
        <div
          className={`${style.box} ${box2 ? style.show : ""}`}
          style={{ gridArea: "box2" }}
        >
          <img src={b3} alt="car" />
        </div>
        <div
          className={`${style.box} ${box3 ? style.show : ""}`}
          style={{ gridArea: "box3" }}
        >
          <img src={b5} alt="britain" />
        </div>
        <div
          className={`${style.box} ${box4 ? style.show : ""}`}
          style={{ gridArea: "box4" }}
        >
          <img src={car} alt="petersbourg" />
        </div>
        <div
          className={`${style.box} ${box5 ? style.show : ""}`}
          style={{ gridArea: "box5" }}
        >
          <img src={newYork} alt="" />
        </div>
        <div
          className={`${style.box} ${box6 ? style.show : ""}`}
          style={{ gridArea: "box6" }}
        >
          <img src={kasba} alt="" />
        </div>
        <div
          className={`${style.box} ${box7 ? style.show : ""}`}
          style={{ gridArea: "box7" }}
        >
          <img src={timeSquare} alt="" />
        </div>
        <div
          className={`${style.box} ${box8 ? style.show : ""}`}
          style={{ gridArea: "box8" }}
        >
          <img src={Mcordoba} alt="" />
        </div>
        <div
          className={`${style.box} ${box9 ? style.show : ""}`}
          style={{ gridArea: "box9" }}
        >
          <img src={Mmali} alt="" />
        </div>
        <div
          className={`${style.box} ${box10 ? style.show : ""}`}
          style={{ gridArea: "box10" }}
        >
          <img src={stP} alt="" />
        </div>
        <div
          className={`${style.box} ${box11 ? style.show : ""}`}
          style={{ gridArea: "box11" }}
        >
          <img src={lagos} alt="" />
        </div>
        <div
          className={`${style.box} ${box12 ? style.show : ""}`}
          style={{ gridArea: "box12" }}
        >
          <img src={HassanM} alt="" />
        </div>
        <div
          className={`${style.box} ${box13 ? style.show : ""}`}
          style={{ gridArea: "box13" }}
        >
          <img src={qudsM} alt="" />
        </div>
      </div>
    </>
  );
}
