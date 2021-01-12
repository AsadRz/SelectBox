import React from "react";
import { Select, Divider, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const { Option, OptGroup } = Select;

let index = 0;

class App extends React.Component {
  state = {
    items: [
      { id: 1, value: "Other School Report" },
      { id: 2, value: "Written Evaluation" },
      { id: 3, value: "Learning Exam Results" },
      { id: 2, value: "Current Courses" },
    ],
    groups: [
      { id: 1, value: "Initial Docs" },
      { id: 2, value: "Midyear Docs" },
      { id: 3, value: "Final Docs" },
    ],
    name: "",
  };

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  addItem = () => {
    console.log("addItem");
    const { items, name } = this.state;
    this.setState({
      items: [...items, name || `New item ${index++}`],
      name: "",
    });
  };

  render() {
    const { items, name, groups } = this.state;
    return (
      <Select
        style={{ width: 330 }}
        placeholder="Please Choose"
        dropdownRender={(menu) => {
          console.log(menu.props.options);
          return (
            // <div>
            //   {menu}
            //   <Divider style={{ margin: "4px 0" }} />
            // </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {menu.props.options.map((a) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "1px solid #616060",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{ background: "lightgray", width: 114, padding: 8 }}
                  >
                    {a.label.value}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {a.options.map((item) => (
                      <div
                        style={{
                          color: "#ccc",
                          borderBottom: "1px solid lightgray",
                          paddingRight: 50,
                          marginBottom: 7,
                          paddingBottom: 6,
                          marginRight: 21,
                        }}
                      >
                        {item.children.value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      >
        <>
          {groups.map((item) => (
            <OptGroup key={item.id} label={item}>
              {items.map((item) => (
                <Option key={item.id}>{item}</Option>
              ))}
            </OptGroup>
          ))}
        </>
      </Select>
    );
  }
}
export default App;
