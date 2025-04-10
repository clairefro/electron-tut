const information = document.getElementById("info");

information.innerText = `This app is using Chrome v${deai.versions.chrome()}`;

const func = async () => {
  const res = await window.deai.ping();
  console.log(res);
};

func();
