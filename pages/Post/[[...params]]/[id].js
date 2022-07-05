import { useRouter } from "next/router";
function Id() {
  const router = useRouter();
  const { params } = router.query || [];
  console.log(params, 5);
  return <>This is Nesting</>;
}
export default Id;
