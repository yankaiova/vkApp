import { View, SplitLayout, SplitCol } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { StoryInfoPage } from "../../pages/story-info";
import { NewStoriesPage } from "../../pages/new-stories";

export const App = () => {
  const { panel: activePanel = "home" } = useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <StoryInfoPage id="story" />
          <NewStoriesPage id="news" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
