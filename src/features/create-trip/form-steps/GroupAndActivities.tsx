import Activities from "../../../components/ui/steps/Activities";
import TravelGroup from "../../../components/ui/steps/TravelGroup";
import { FormData } from "../type";

interface GroupAndActivitiesProps {
  groupValue: FormData["withWhom"];
  groupChange: (GroupValue: FormData["withWhom"]) => void;
  activityValue: FormData["activity"];
  activityChange: (AvtivityValue: FormData["activity"]) => void;
}

export function GroupAndActivities({
  groupValue,
  groupChange,
  activityValue,
  activityChange,
}: GroupAndActivitiesProps) {
  return (
    <div className="flex flex-col gap-5">
      <TravelGroup groupValue={groupValue} onSelection={groupChange} />
      <Activities activityValue={activityValue} onSelection={activityChange} />
    </div>
  );
}
