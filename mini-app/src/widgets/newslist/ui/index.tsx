import { StoryItem } from "../../../entities/story";
import { getNewStories } from "../api/api";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Button, Div, ScreenSpinner } from "@vkontakte/vkui";

export const NewStorylist = () => {
  let timerId;
  const routeNavigator = useRouteNavigator();
  const { data, isSuccess, isLoading, refetch } = getNewStories();
  const handleClick = async () => {
    clearInterval(timerId);
    refetch();
    timerId = setInterval(() => refetch(), 60 * 1000);
  };
  return (
    <>
      <Button onClick={handleClick}>Обновить ленту</Button>
      {isSuccess &&
        data.map((id: number) => (
          <Div key={id}>
            <StoryItem id={id} />
            <Button
              style={{ cursor: "pointer" }}
              onClick={() => routeNavigator.push(`/story/${id}`)}
            >
              Перейти
            </Button>
          </Div>
        ))}
      {isLoading && <ScreenSpinner state="loading" />}
    </>
  );
};
