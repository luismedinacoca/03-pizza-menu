const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry, we're closed!");

  console.log(hour);
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open untill {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
