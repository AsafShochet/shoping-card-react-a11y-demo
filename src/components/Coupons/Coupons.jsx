import "./Coupons.css";

const Coupons = () => {
  const couponsList = [
    {
      title: "June Madness",
      text: "Get 10% off your next experience with code when you use this Groupon exclusive Tripadvisor promo code!"
    },
    {
      title: "Cucumbers Rule!",
      text: "Get 30 free cucumbers off your next experience with code when you use this Groupon exclusive Tripadvisor promo code!"
    },
    {
      title: "Mr. T's Discount",
      text: "Get 5% off for every T that you have in your name. Family names not included."
    },
    {
      title: "Free Shipping",
      text: "Get free shipping on all orders over $1000."
    },
    {
      title: "Lucky Sevens",
      text: "Get 5% off for every 7 that you have in your ID."
    },
    {
      title: "Gift from us",
      text: "Get 2 Bananas for every order."
    }
  ];
  const renderCoupon = (title, text) => {
    return (
      <div className="coupon-card">
        <h2>{title}</h2>
        <div className="coupon-content">{text}</div>
        <button className="coupon-button">Get Coupon</button>
      </div>
    );
  };
  return (
    <div className="coupons">
      <h1>Coupons</h1>
      <div className="coupons-list">
        {couponsList.map((coupon) => renderCoupon(coupon.title, coupon.text))}
      </div>
      <div className="coupons-footer">
        <h2>Preferences</h2>
        <div className='toggle-row'>
          I prefer to receive emails about carrots
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className='toggle-row'>
          I prefer to receive emails about cucumbers
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className='toggle-row'>
          I prefer to receive emails about all discounts
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
