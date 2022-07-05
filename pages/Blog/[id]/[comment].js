import { useRouter } from "next/router";
function Comment() {
  const router = useRouter();
  const { id, comment } = router.query;
  return (
    <>
      <h3>This is comment Page No: {comment}</h3>
      <h5>This is id path: {id}</h5>
    </>
  );
}
export default Comment;
