const Enter = document.querySelector(".enter");
const inputs = document.querySelectorAll("input");
const datetab = document.querySelector(".datetab");
const header = document.querySelectorAll(".h");

// Alert messages

const alertText1 = document.querySelector(".alertText--1");
const alertText2 = document.querySelector(".alertText--2");
const alertText3 = document.querySelector(".alertText--3");

// const inputTabs = document.querySelector("input");

const inputDay = document.querySelector(".input--1");
const inputmonth = document.querySelector(".input--2");
const inputyear = document.querySelector(".input--3");

/*================================= */
const span1 = document.querySelector(".num-1");
const span2 = document.querySelector(".num-2");
const span3 = document.querySelector(".num-3");

// --------------FOR DAY-----------------------------
let isvalid = false;
inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31 || inputDay.value <= 0) {
    alertText1.innerHTML = "Not a valid date";
    alertText1.classList.add("alertText");
    header.forEach((e) => {
      e.style.color = "hsl(0, 100%, 67%)";
      isvalid = false;
    });
    // return;
  } else {
    alertText1.innerHTML = "";
    header.forEach((e) => {
      e.style.color = "hsl(0, 1%, 44%)";
    });
    isvalid = true;
    return;
  }

  if (!inputDay.value) {
    alertText1.innerHTML = "This Field is required";
    isvalid = false;
    return;
  }
});
// --------------FOR MONTH-----------------------------

inputmonth.addEventListener("input", (e) => {
  if (+inputmonth.value > 12 || inputmonth.value <= 0) {
    alertText2.innerHTML = "Not a valid month";
    alertText2.classList.add("alertText");
    header.forEach((e) => {
      e.style.color = "hsl(0, 100%, 67%)";
      isvalid = false;
    });
    // return;
  } else {
    alertText2.innerHTML = "";
    header.forEach((e) => {
      e.style.color = "hsl(0, 1%, 44%)";
    });
    isvalid = true;

    return;
  }

  if (!inputmonth.value) {
    alertText2.innerHTML = "This Field is required";
    isvalid = false;
    return;
  }
});
// --------------FOR YEAR-----------------------------
inputyear.addEventListener("input", (e) => {
  if (+inputyear.value > 2023 || inputyear.value <= 0) {
    alertText3.innerHTML = "Not a valid year";
    alertText3.classList.add("alertText");
    header.forEach((e) => {
      e.style.color = "hsl(0, 100%, 67%)";
    });
    isvalid = false;
    // return;
  } else {
    alertText3.innerHTML = "";
    header.forEach((e) => {
      e.style.color = "hsl(0, 1%, 44%)";
    });
    isvalid = true;
    return;
  }
  if (!inputyear.value) {
    alertText3.innerHTML = "This Field is required";
    isvalid = false;
    return;
  }
});

Enter.addEventListener("click", (e) => {
  //--------------------METHOD ! START-----------------
  class cal {
    constructor(date, month, year) {
      this.date = date;
      this.month = month;
      this.year = year;
    }
  }
  const data = new cal(
    parseInt(inputDay.value),
    parseInt(inputmonth.value),
    parseInt(inputyear.value)
  );

  cal.prototype.GetDay = function () {
    const varyDay = 31;
    if (varyDay) {
      const day = varyDay - this.date;
      span1.innerHTML = day;
    }
  };
  cal.prototype.GetMonth = function () {
    const month = 12 - this.month;
    span2.innerHTML = month;
  };
  cal.prototype.GetYear = function () {
    const year = 2023 - this.year;
    span3.innerHTML = year;
  };
  data.GetDay();
  data.GetMonth();
  data.GetYear();
  // -------------------METHOD ! END--------------------------

  if (!inputDay.value || !inputmonth.value || !inputyear.value) {
    span1.innerHTML = "- -";
    span2.innerHTML = "- -";
    span3.innerHTML = "- -";
    const alertText = document.querySelectorAll(".alertText");
    alertText.forEach((e) => {
      e.innerHTML = "This Field is Required";
      e.classList.add("alertText");
      header.forEach((e) => {
        e.style.color = "hsl(0, 100%, 67%)";
      });
      setTimeout(() => {
        e.innerHTML = "";
        header.forEach((e) => {
          e.style.color = "hsl(0, 1%, 44%)";
        });
      }, 1500);
    });
  }
  if (inputDay.value <= 0 || inputmonth.value <= 0 || inputyear.value <= 0) {
    span1.innerHTML = "- -";
    span2.innerHTML = "- -";
    span3.innerHTML = "- -";
  }
  if (inputDay.value > 31 || inputmonth.value > 12 || inputyear.value > 2023) {
    span1.innerHTML = "- -";
    span2.innerHTML = "- -";
    span3.innerHTML = "- -";
  }
  // -----------------METHOD 2 START------------------------
  // if (isvalid) {
  //   let birthday = `${inputDay.value} ${inputmonth.value} ${inputyear.value}`;
  //   console.log(birthday);
  //   let birthdayObj = new Date(birthday);
  //   let ageDiffMill = Date.now() - birthdayObj;
  //   let ageDate = new Date(ageDiffMill);
  //   let span3Year = ageDate.getUTCFullYear() - 1970;
  //   let span2Month = ageDate.getUTCMonth();
  //   let span1Day = ageDate.getUTCDay() - 1;

  //   console.log(span1Day);

  //   span1.innerHTML = span1Day;
  //   span2.innerHTML = span2Month;
  //   span3.innerHTML = span3Year;
  // }
  //------------------------METHOD 2 END-------------------------

  inputs.forEach((input) => {
    input.value = "";
  });
});
