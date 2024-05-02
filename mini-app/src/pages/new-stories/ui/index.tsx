import { FC } from "react";
import { NewStorylist } from "../../../widgets/newslist/ui";
import { Panel, PanelHeader, Group } from "@vkontakte/vkui";
export const NewStoriesPage: FC<{ id: string }> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Новости</PanelHeader>
      <Group>
        <NewStorylist />{" "}
      </Group>
    </Panel>
  );
};
