import { useOutletContext } from "react-router";

function Home() {
  let props = useOutletContext();
  let style = props[2][0];
  return (
    <>
      <main className="nilePhoto home">
        <div className={"presentation " + (style && " sober")}>
          Go with the stream and sail across stylish clothing and high end
          computer hardware !
        </div>
      </main>
    </>
  );
}
export default Home;
