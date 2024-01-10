import data from "./data.json" assert { type: "json" };
// console.log(data.deliveryLocations);

const daySelector = {
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
  7: "Sun",
};

const getMonth = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
const currDate = new Date();
let month = getMonth[currDate.getMonth() + 1];
let date = currDate.getDate();
// let day = daySelector[date.getDay()];
// console.log(date.getDate());
// console.log(daySelector[date.getDay()]);
// console.log(date.getDate());
// submit.addEventListener("click", () => {
//   let found = false;
//   const inputValue = document.getElementById("input_btn").value;
//   //   console.log(inputValue);
//   if (inputValue) {
//     for (let i of data.deliveryLocations) {
//       //   console.log(i);
//       if (i.pincode === inputValue) {
//         const estimatedDate = `${
//           daySelector[currDate.getDay() + i.estimatedDeliveryDays + 1]
//         }, ${date + i.estimatedDeliveryDays + 1} ${month} `;
//         delivery.innerHTML = `Estimated Delivery : ${estimatedDate}`;
//         found = true;
//       }
//       break;
//     }
//     if (!found) {
//       delivery.innerHTML = "Not deliverable";
//     }
//   }
// });

class SearchBtn extends HTMLElement {
  constructor() {
    super();
    this.pincodeInput = this.querySelector("#input_btn");
    this.pincodeSubmitBtn = this.querySelector(".submit_btn");
    // debugger;
    this.pincodeMessage = this.querySelector(".delivery_message");

    //Click event on submit btn
    this.pincodeSubmitBtn.addEventListener(
      "click",
      this.validatePincode.bind(this)
    );

    // Clear the search area on click
    this.pincodeInput.addEventListener("click", this.clearInput.bind(this));

    // this.pincodeInput.addEventListener("keypress", function (e) {
    //   //Check for number input only.
    //   if (e.which < 48 || e.which > 57 || e.target.value.length === 6)
    //     e.preventDefault();
    // });
  }

  //Validate the pin code:
  validatePincode() {
    let found = false;
    const inputValue = this.pincodeInput.value;
    console.log(inputValue);
    if (inputValue) {
      for (let i of data.deliveryLocations) {
        //   console.log(i);
        if (i.pincode === inputValue) {
          const estimatedDate = `${
            daySelector[currDate.getDay() + i.estimatedDeliveryDays + 1]
          }, ${date + i.estimatedDeliveryDays + 1} ${month} `;
          this.pincodeMessage.innerHTML = `Estimated Delivery : ${estimatedDate}`;
          found = true;
        }
        break;
      }
      if (!found) {
        this.pincodeMessage.innerHTML = "Not deliverable";
      }
    }
  }

  clearInput() {
    this.pincodeInput.value = "";
    this.pincodeMessage.innerHTML = "";
  }
}

window.customElements.define("search-btn", SearchBtn);
