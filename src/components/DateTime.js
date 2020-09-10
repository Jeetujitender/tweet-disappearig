import React from "react";
import moment from "moment";
import { DatePicker, Space } from "antd";
// const { RangePicker } = DatePicker;
const DateTime = ({ setDuration }) => {
  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  // function disabledRangeTime(_, type) {
  //     if (type === 'start') {
  //         return {
  //             disabledHours: () => range(0, 60).splice(4, 20),
  //             disabledMinutes: () => range(30, 60),
  //             disabledSeconds: () => [55, 56],
  //         };
  //     }
  //     return {
  //         disabledHours: () => range(0, 60).splice(20, 4),
  //         disabledMinutes: () => range(0, 31),
  //         disabledSeconds: () => [55, 56],
  //     };
  // }
  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        style={{ margin: "0 0 0 50px" }}
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
        onOk={(data) => setDuration(data.format())}
      />
    </Space>
  );
};
export default DateTime;
