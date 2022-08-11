import { useRouter } from "next/router";
const pageNumber = () => {
  //for dynamic routing, use the useRouter hook
  const router = useRouter();
  //write the router.query.[number] to the page variable
  const page = router.query.number;
  return <div>My blog {page}</div>;
};

export default pageNumber;
