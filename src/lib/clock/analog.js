const analog = {
  id: undefined,
  init(id) {
    const _this = this;
    _this.id = id;

    _this.render();
  },
  render() {
    let _this = this;

    window.context = document.getElementById(this.id).getContext("2d");
    window.radius = document.getElementById(this.id).width / 2;

    setInterval(function (context, radius) {
      _this.makeClockTool(this.context, this.radius);
      _this.makeNumberTool(this.context, this.radius);
      _this.makeArrowTool(this.context, this.radius);
    }, 1000);
  },
  makeClockTool: (context, radius) => {
    // 1. 시계 틀 만들기
    let grad = 0;
    context.beginPath();
    context.arc(radius, radius, radius, 0, Math.PI * 2);
    context.fillStyle = "#D2D2D2";
    context.fill();

    // grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 2);
    // grad.addColorStop(0, '#414141');
    // grad.addColorStop(1, '#414141');
    grad.addColorStop(0, "#1c1c1c");
    grad.addColorStop(1, "#1c1c1c");
    context.strokeStyle = grad;
    context.lineWidth = 0;
    context.stroke();
  },
  makeNumberTool: (context, radius) => {
    // 2. 숫자 집어넣기
    context.font = 10 + "px Arial";
    for (let i = 0; i < 12; i++) {
      let x = 350 * Math.cos((Math.PI * (30 * i)) / 180) + radius - 20;
      let y = 350 * Math.sin((Math.PI * (30 * i)) / 180) + radius + 20;
      let number = 0;
      if (i <= 9) {
        number = i + 3;
      } else {
        number = i - 9;
      }
      context.fillText("", x, y);
    }
  },
  makeArrowTool: (context, radius) => {
    // 3. 시 분 초 침 만들기
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // 초
    // context.beginPath();
    // context.moveTo(radius, radius);
    // context.lineTo(20* Math.cos(Math.PI* ((second* 6)- 90)/ 180)+ radius,
    //             20* Math.sin(Math.PI* ((second* 6)- 90)/ 180)+ radius);
    // context.lineWidth= 1;
    // context.strokeStyle= "#414141";
    // context.stroke();

    // 분
    context.beginPath();
    context.moveTo(radius, radius);
    context.lineTo(
      27 * Math.cos((Math.PI * (minute * 6 - 90 + second * (6 / 60))) / 180) +
        radius,
      27 * Math.sin((Math.PI * (minute * 6 - 90 + second * (6 / 60))) / 180) +
        radius
    );
    context.lineWidth = 1;
    context.stroke();
    context.strokeStyle = "#414141";

    context.beginPath();
    context.moveTo(radius + 1.5, radius);
    context.lineTo(
      27 * Math.cos((Math.PI * (minute * 6 - 90 + second * (6 / 60))) / 180) +
        radius,
      27 * Math.sin((Math.PI * (minute * 6 - 90 + second * (6 / 60))) / 180) +
        radius
    );

    context.lineWidth = 1;
    context.stroke();
    context.strokeStyle = "#414141";

    context.beginPath();
    context.moveTo(radius - 1.5, radius);
    context.lineTo(
      27 * Math.cos((Math.PI * (minute * 6 - 90 + second * (6 / 60))) / 180) +
        radius,
      27 * Math.sin((Math.PI * (minute * 6 - 90 + second * (6 / 60))) / 180) +
        radius
    );

    context.lineWidth = 1;
    context.stroke();
    context.strokeStyle = "#414141";

    // 시
    context.beginPath();
    context.moveTo(radius, radius);
    context.lineTo(
      18 *
        Math.cos(
          (Math.PI * (hour * 30 - 90 + Math.PI * (minute * (6 / 30)))) / 180
        ) +
        radius,
      18 *
        Math.sin(
          (Math.PI * (hour * 30 - 90 + Math.PI * (minute * (6 / 30)))) / 180
        ) +
        radius
    );
    context.closePath();
    context.lineWidth = 1;
    context.stroke();
    context.strokeStyle = "#414141";

    context.beginPath();
    context.moveTo(radius - 2, radius);
    context.lineTo(
      18 *
        Math.cos(
          (Math.PI * (hour * 30 - 90 + Math.PI * (minute * (6 / 30)))) / 180
        ) +
        radius,
      18 *
        Math.sin(
          (Math.PI * (hour * 30 - 90 + Math.PI * (minute * (6 / 30)))) / 180
        ) +
        radius
    );
    context.closePath();
    context.lineWidth = 1;
    context.stroke();
    context.strokeStyle = "#414141";

    context.beginPath();
    context.moveTo(radius + 2, radius);
    context.lineTo(
      18 *
        Math.cos(
          (Math.PI * (hour * 30 - 90 + Math.PI * (minute * (6 / 30)))) / 180
        ) +
        radius,
      18 *
        Math.sin(
          (Math.PI * (hour * 30 - 90 + Math.PI * (minute * (6 / 30)))) / 180
        ) +
        radius
    );
    context.closePath();
    context.lineWidth = 1;
    context.stroke();
    context.strokeStyle = "#414141";

    context.beginPath();
    context.moveTo(radius, radius);
    context.arc(radius, radius, 3, 0, Math.PI * 2);
    context.fillStyle = "#D2D2D2";
    context.fill();

    context.beginPath();
    context.moveTo(radius, radius);
    context.arc(radius, radius, 1.5, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = "#414141";
    context.fill();
  },
};

export default analog;
