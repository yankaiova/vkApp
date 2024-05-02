import { ContentCard, SimpleCell } from "@vkontakte/vkui";
import { getStorybyId } from "..";
import { formatDate } from "../../../shared/lib/utils/formatDate";
type props = { id: number };
export const StoryItem = ({ id }: props) => {
  const { isError, error, data, isSuccess } = getStorybyId(id);
  return (
    <>
      {isSuccess && (
        <ContentCard
          caption={"Создано " + data.by}
          header={data.title}
          subtitle={formatDate(new Date(data.time * 1000))}
          text={"Рейтинг: " + data.score}
        />
      )}

      {isError && <SimpleCell>{error.message}</SimpleCell>}
    </>
  );
};
