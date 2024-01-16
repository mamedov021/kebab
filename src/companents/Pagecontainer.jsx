import Header from "../companents/Header";
import Footer from "../companents/Footer";
const PageContainer = ({ children }) => {
  return (
    <div className="w-full flex justify-center w-full  ">
      <div className="w-full  flex flex-col justify-center  ">
      <Header />
      <main> {children}</main>
      <Footer />

      </div>
    </div>
  );
};
export default PageContainer;
