import { useParams } from "@vkontakte/vk-mini-apps-router";
import { CommentItem } from "../../../entities/comment";
import { getStorybyId } from "../../../entities/story";
import { formatDate } from "../../../shared/lib/utils/formatDate";
import {
  Group,
  Text,
  SimpleCell,
  ScreenSpinner,
  Link,
  Div,
  Title,
  Caption,
  Button,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
export const StoryDetail = () => {
  const id = useParams<"id">().id;
  const { isError, error, data, isSuccess, isLoading } = getStorybyId(id);
  const routeNavigator = useRouteNavigator();
  return (
    <Group style={{ padding: "20px" }}>
      <Button
        style={{ cursor: "pointer" }}
        onClick={() => routeNavigator.push(`/`)}
      >
        Вернуться к новостям
      </Button>
      {isSuccess && (
        <Div>
          <Link href={data.url} target="_blank">
            Открыть ссылку на новость
          </Link>
          <Text style={{ margin: "20px 0" }}>Создано {data.by}</Text>

          <Title level="1">{data.title}</Title>
          <Caption style={{ margin: "20px 0" }}>
            {formatDate(new Date(data.time * 1000))}
          </Caption>
          <Text>{data.descendants + " крмментариев"}</Text>
          <Title level="2" style={{ margin: "20px 0" }}>
            Комментарии
          </Title>
          <Div>
            {data.kids.map((id: number) => (
              <CommentItem id={id} key={id} />
            ))}
          </Div>
        </Div>
      )}
      {isError && <SimpleCell>{error.message}</SimpleCell>}
      {isLoading && <ScreenSpinner />}
    </Group>
  );
};
