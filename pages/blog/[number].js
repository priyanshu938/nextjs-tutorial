import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
const pageNumber = () => {
  //for dynamic routing, use the useRouter hook
  const router = useRouter();
  //write the router.query.[number] to the page variable
  const page = router.query.number;
  return (
    <div>
      <Navbar />
      <div>My blog {page}</div>;
    </div>
  );
};

export default pageNumber;
