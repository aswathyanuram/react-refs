import React, { useState } from "react";
import styles from "./ANTReference.module.css";
import { Switch } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { ColorPicker } from "antd";
import { Rate } from "antd";

export default function ANTReference() {
  const [switchState, setSwitchState] = useState("ON");
  const [colorSelected, setColorSelected] = useState("#BCDBCD");
  const [selectedRating, setSelectedRating] = useState(5);

  const onChange = (checked) => {
    if (checked) {
      setSwitchState("ON");
    } else {
      setSwitchState("OFF");
    }
  };

  const options = [
    {
      key: "1",
      label: <div>Option 1</div>,
    },
    {
      key: "2",
      label: <div>Option 2</div>,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>SWITCH - {switchState}</div>
        <div>
          <Switch defaultChecked={true} onChange={onChange} />
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.title}>DROPDOWN</div>
        <div>
          <Dropdown
            menu={{
              items: options,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Select Option
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.title}>Color Picker - {colorSelected}</div>
        <div>
          <ColorPicker
            defaultValue="#BCDBCD"
            onChange={(color) => {
              setColorSelected(
                `rgb(${color?.metaColor?.r},${color?.metaColor?.g},${color?.metaColor?.b})`
              );
            }}
          />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>Rating - {selectedRating}</div>
        <div>
          <Rate
            value={selectedRating}
            onChange={(rating) => {
              setSelectedRating(rating);
            }}
          />
        </div>
      </div>
    </div>
  );
}
