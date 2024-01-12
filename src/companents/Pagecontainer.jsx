import Header from "../companents/Header";
import Footer from "../companents/Footer";
const PageContainer = ({ children }) => {
  return (
    <div className="w-full flex justify-center w-full  ">
      <div className="w-10/12">
      <Header />
      <main> {children}</main>
      <Footer />

      </div>
    </div>
  );
};
export default PageContainer;
