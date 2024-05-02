import { FC } from "react";
import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
import { StoryDetail } from "../../../widgets/story-detail/ui";

export const StoryInfoPage: FC<{ id: string }> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Детали новости</PanelHeader>
      <StoryDetail />{" "}
    </Panel>
  );
};
