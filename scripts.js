/*  render: function() {
    return (
      <div>
          <h1> Yosias Hailu </h1>
          <h2> Vertical Leap + Optimized Sleep Calculations + 24/7 Trainer Access </h2>
      </div>
    );
  }
});
*/

//ReactDOM.render(<Bacon/>, document.getElementById('root'));
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));

var Images = React.createClass( {
  render: function() {
    return (
      <div>

      <img  style={{width: 250, height: 250}}src="https://i0.wp.com/nk_wp_media.s3.amazonaws.com/files/2014/10/jumpman-logo-wallpaper-3.jpg?resize=1024%2C768" />
      <img  style={{width: 250, height: 250}}src="https://t3.ftcdn.net/jpg/01/17/61/62/500_F_117616211_zwP0dhphAWMEjAan9HKPZafPyY4fEAJ4.jpg" />
      </div>
    );
  }
});
ReactDOM.render(<Images/>, document.getElementById('pics'));
