const MyComponent = (props) => {
  return (
    <div>
      새로운 컴포넌트의 이름은 {props.info.name} 입니다.<br></br>
      {props.info.content}
    </div>
  );
};

MyComponent.defaultProps = {
  info: {
    name: "디폴트",
    content: " 디폴트 내용",
  },
};
export default MyComponent;
