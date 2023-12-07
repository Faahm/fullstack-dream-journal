import UpdateDream from "../../components/UpdateDream";
import { getIndividualDream } from "../../../lib/utils";

const page = async ({ params }) => {
  const { dreamId } = params;

  const dream = await getIndividualDream(dreamId);

  if (!dream) {
    return <div>Dream not found</div>;
  }

  return (
    <div>
      <UpdateDream dream={dream} />
    </div>
  );
};

export default page;
